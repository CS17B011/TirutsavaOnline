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

//api/events/register
router.post('/register', loggedin, (req, res) => {
	Event.findOne({ eventId: req.body.eventId })
		.then((event) => {
			if (event) {
				Insta.setKeys(process.env.TEST_API_KEY, process.env.TEST_AUTH_TOKEN);
				const data = new Insta.PaymentData();
				Insta.isSandboxMode(true);
				var type;
				const user = req.session.passport.user;
				if (user.googleid)
					type = 'google';
				else
					type = 'local';
				data.purpose = event.name + ' Registration';
				data.amount = event.entryfee;
				data.buyer_name = user.name;
				data.redirect_url = `http://localhost/api/events/register/callback?user_id=${user._id}&type=${type}`;
				data.email = user.email;
				data.send_mail = true;
				data.allow_repeated_payments = false;

				Insta.createPayment(data, (err, pres) => {
					if (err) {
						res.send({ success: false, error: true });
					}
					else {
						console.log(pres);
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
});

router.get('/register/callback', (req, res) => {
	let url_parts = url.parse(req.url, true);
	var responseData = url_parts.query;
	if (responseData.type === 'local')
	{
		LocalUser.findOne({ _id: responseData.user_id })
			.then((user) => {
				
			})
			.catch((err) => {
				console.log(err);
				res.status(500).send({ valid:false});
			});
	}
});

module.exports = router;