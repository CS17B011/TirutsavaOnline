const express = require('express');
const router = express.Router();
var ObjectID = require('mongodb').ObjectID;

const Event = require('../models/Event.js');

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

//Route POST /events/create
//Adding new Event
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
				typeOfEvent: req.body.typeOfEvent
			});
			newEvent.save()
				.then(event => res.json(event));
		});
});

//Route PUT events/update/id
//Updating Event with given id
router.put('/update/:id', (req, res) => {

	const editedEvent = {
		name: req.body.name,
		date: req.body.date,
		time: req.body.time,
		venue: req.body.venue,
		entryFee: req.body.entryFee,
		prize: req.body.prize,
		coordinatorContact: req.body.coordinatorContact,
		shortDescription: req.body.shortDescription,
		longDescription: req.body.longDescription,
		posterImage: req.body.posterImage
	}

	Event.updateOne({ "_id": req.params.id },
		editedEvent)
		.then(answer => res.json(answer))
		.catch(err => res.status(400).json({ "msg": "Bad Request!!" }));
});

//Route DELETE events/delete/id
//Delete Event
router.delete('/delete/:id', (req, res) => {
	Event.findById(req.params.id)
		.then(item => item.remove().then(() => res.json({ success: true })))
		.catch(err => res.status(404).json({ success: false }));
});

module.exports = router;