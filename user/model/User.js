const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    phno: {
        type: Number,
        min: 6000000000,
        max: 9999999999
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    }

});

module.exports = mongoose.model('User', UserSchema);