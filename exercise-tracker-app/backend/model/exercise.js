const mongoose = require('mongoose');

const exerciseschema = mongoose.Schema({
    username: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: String, required: true},
    date: {type: Date, required: true},
},
{
    timestamps: true,
})

module.exports = mongoose.model('exercise', exerciseschema);