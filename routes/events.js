const express = require('express');
const router = express.Router();
const Insta = require('instamojo-nodejs');
const loggedin = require('../services/middleware');
const GoogleUser = require('../models/GoogleUser');
const LocalUser = require('../models/LocalUser');
const Event = require('../models/Event.js');

const url = require('url');

/*Access for all the routes is private expect GET /events route.*/

//Route GET /events
//Getting all Events from the database
router.get('/type/:id', (req, res) => {
	Event.find({ "typeOfEvent": req.params.id })
		.then((events) => res.json(events))
});

router.get('/:id', (req, res) => {
	Event.findOne({ "eventId": req.params.id })
		.then((event) => res.json(event))
		.catch((err) => {
			throw err;
		});
});

router.post('/registerfree', loggedin, async(req, res, next) => {
	const user = req.session.passport.user;
	var name_id;
	var already = false;
	//console.log("Log : ", req.body.event_id);
	if (user.googleid)
	{
		name_id = 'g_' + user._id; 
		console.log("Name_id : ", name_id);
		await GoogleUser.findOne({_id: user._id}).
			then(async nuser => {
				if(nuser.registeredeventids.includes(req.body.event_id)){
					already = true;
				}
				else{
					await GoogleUser.updateOne({ _id: user._id },
		                        {
                		                $push: { registeredeventids: req.body.event_id }
                       			 });
                			////console.log("Local Event");
            				await Event.updateOne({
                        		eventId: req.body.event_id
                			},
                        		{
                                	$push: { participants : name_id }
                        		});

					}
			}).catch(err => console.error(err));

	}	
	else
	{
		name_id = 'l_' + user._id;
		await LocalUser.findOne({_id: user._id}).
			then(async nuser => {
				if(nuser.registeredeventids.includes(req.body.event_id)){
					already = true;
				}
				else{
					await LocalUser.updateOne({_id:user._id}, {$push: {registeredeventids: req.body.event_id}});
					await Event.updateOne({eventId: req.body.event_id}, {$push: {participants: name_id}});
				}
			}).catch(err=>console.error(err));
	}
	res.send({ valid: true , already: already});
});


router.post('/update', async(req,res) => {
	await Event.updateOne({eventId: req.body.eventId}, {
		$set:{
			name: req.body.name,
			description: req.body.description,
			typeOfEvent: req.body.typeOfEvent,
			entryfee: req.body.entryfee,
			eventDate: req.body.eventDate,
			eventTime: req.body.eventTime,
			registrationClose: req.body.registrationClose,
			cashPrize: req.body.cashPrize,
			submissionMail: req.body.submissionMail,
			venue: req.body.venue
		}
	},(err, event) => {
		if(err){
			res.send(err);
		}
		else{
			console.log(event);
			res.send(true);
		}
	});
});


router.post('/create', (req, res) => {
	let nnm = 0;
	Event.estimatedDocumentCount((err, res) => {
		if (!err)
			nnm = res + 1;
	})
		.then(() => {
			const newEvent = Event({
				name: req.body.name,
				eventId: nnm,
				description: req.body.description,
				typeOfEvent: req.body.typeOfEvent,
				entryfee: req.body.entryfee
			});
			newEvent.save()
				.then(event => res.json(event));
		});
});


//api/events/register
router.post('/register', loggedin, async(req, res) => {
	var already = false;
	if(req.session.passport.user.googleid){
		await GoogleUser.findOne({_id: req.session.passport.user._id}).
			then(nuser => {
				if(nuser.registeredeventids.includes(req.body.eventId)){
					res.send({valid: true, already: true});
					already = true;
				}
			}).catch(err => console.error(err));
	}
	else{
		await LocalUser.findOne({_id: req.session.passport.user._id}).
			then(nuser => {
				if(nuser.registeredeventids.includes(req.body.eventId)){
					res.send({valid: true, already: true});
					already = true;
				}
			}).catch(err => console.error(err));
	}
	if(!already){
	await Event.findOne({ eventId: req.body.eventId }
)
		.then((event) => {
			if (event) {
				Insta.setKeys(process.env.INSTA_PRIVATE_API_KEY, process.env.INSTA_AUTH_TOKEN);
				const data = new Insta.PaymentData();
				var type;
				const user = req.session.passport.user;
				if (user.googleid)
					type = 'google';
				else
					type = 'local';
				data.purpose = event.name + ' Registration';
				data.amount = event.entryfee;
				data.buyer_name = user.name;
				data.redirect_url = `http://tirutsava.com/api/events/register/callback?user_id=${user._id}&type=${type}&event_id=${event.eventId}`;
				data.email = user.email;
				data.send_mail = true;
				data.allow_repeated_payments = false;

				Insta.createPayment(data, (err, pres) => {
					if (err) {
						res.send({ success: false, error: true });
					}
					else {
						////console.log(pres);
						const response = JSON.parse(pres);
						res.status(200).json(response);
					}
				});
			}
			else {
				res.send({ valid: true, isevent: false });
			}
		})
		.catch(err => {
			res.send({ valid: false });
		});
	}
});

router.get('/register/callback', async(req, res) => {
	let url_parts = url.parse(req.url, true);
	var responseData = url_parts.query;
	////console.log(responseData);
	////console.log("Callback");
	if (responseData.payment_status == 'Failed')
		res.redirect('http://tirutsava.com/dashboard');
	else
	{
		if (responseData.type === 'local') {
			const name_id = 'l_' + responseData.user_id;
			const did = parseInt(responseData.event_id);
			////console.log("Local");
			await LocalUser.updateOne({ _id: responseData.user_id },
				{
					$push: { registeredeventids: did }
			});
		////console.log("Local Event");
			await Event.updateOne({
				eventId: responseData.event_id
			},
				{
					$push: { participants: name_id }
				})
			res.redirect('http://tirutsava.com/dashboard');
		}
		else if (responseData.type === 'google') {
			const name_id = 'g_' + responseData.user_id;
			const did = parseInt(responseData.event_id);
			////console.log("Google");
			await GoogleUser.updateOne({ _id: responseData.user_id },
				{
					$push: { registeredeventids: did }
				});
			////console.log("Google Event");
			await Event.updateOne({
				eventId: responseData.event_id
			},
				{
					$push: { participants: name_id }
				})
		}
		res.redirect('http://tirutsava.com/dashboard');
	}
});

module.exports = router;
