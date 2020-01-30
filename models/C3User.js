const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const C3UserSchema = new Schema({
    name_id : String,
    gameState : [],
    isVisible : [],
    colorValue : [],
    answers : [
        {index : Number,
        isLock : Number,
        time : {
            hour : Number,
            min : Number,
            sec : Number
        }}
    ]
})

module.exports = mongoose.model('C3User', C3UserSchema);