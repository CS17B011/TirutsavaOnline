const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	eventId: {
		type: Number,
		default: 0
	},
	typeOfEvent: {
		type: Number,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	participants: {
		type: Array,
		default: []
	},
	entryfee: {
		type: Number,
		required: true
	},
	entryfee: {
		type: Number,
		required: true
	},
	eventDate: {
		type: String,
		default: ""
	},
	eventTime: {
		type: String,
		default: ""
	},
	venue: {
		type: String,
		value: ""
	},
	registrationClose: {
		type: String,
		default: null
	},
	submissionMail: {
		type: String,
		default: ""
	},
	cashPrize: {
		type: Number,
		default: 0
	}
});

module.exports = Event = mongoose.model('Event', EventSchema);
