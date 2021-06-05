const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        min: 5
    },
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('user', userschema);