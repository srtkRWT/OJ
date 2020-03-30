const mongoose = require('mongoose');


const TestSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        min: 8,
    },
    title: {
        type: String,
        required: true,
        min: 1
    },
    description: {
        type: String,
        required: true,
        min: 3,
        max: 4096
    },
    startTime: {
        type: Date,
        default: Date.now()
    },
    endTime: {
        type: Date,
        default: Date.parse(12 - 12 - 2999)
    },
    authorId: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Test', TestSchema);