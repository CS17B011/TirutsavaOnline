const mongoose = require('mongoose');

const LocalUserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    phonenum: {
        type: String,
        required: true
    },
    registeredeventids: {
        type: Array,
        default: []
    },
    gender: {
        type: String
    }
});

module.exports = LocalUser = mongoose.model('LocalUser', LocalUserSchema);