const mongoose = require('mongoose');

const GoogleUserSchema = mongoose.Schema({
    googleid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    college: {
        type: String,
        default: 'NA'
    },
    city: {
        type: String,
        default: 'NA'
    },
    state: {
        type: String,
        default: 'NA'
    },
    phonenum: {
        type: String,
        default: 'NA'
    },
    registeredeventids: {
        type: Array,
        default: []
    },
    gender: {
        type: String,
        default: 'NA'
    }
});

module.exports = GoogleUser = mongoose.model('GoogleUser', GoogleUserSchema);