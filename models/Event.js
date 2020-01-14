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
	}
});

module.exports = Event = mongoose.model('Event', EventSchema);