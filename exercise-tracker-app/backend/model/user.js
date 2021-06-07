const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        min: 5
    },
    fullname: {
        type: String,
        required: true,
        min: 5
    },
    phone: {
        type: Number,
        min: 10,
        max: 10
    }
    
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('user', userschema);