const mongoose = require('mongoose');


const TestSeriesSchema = new mongoose.Schema({
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
    isPublished: {
        type: Boolean,
        default: false,
    },
    authorId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('TestSeries', TestSeriesSchema);