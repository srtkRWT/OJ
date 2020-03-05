const mongoose = require('mongoose');


const ModeratorSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 1
    },
    statement: {
        type: String,
        required: true,
        min: 1
    },
    op1: {
        type: String,
        required: true,
        min: 1
    },
    op2: {
        type: String,
        required: true,
        min: 1
    },
    op3: {
        type: String,
        required: true,
        min: 1
    },
    op4: {
        type: String,
        required: true,
        min: 1
    },
    correct_op: {
        type: Number,
        required: true,
        min: 1,
        max: 4
    },
    // TODO: ADD keywords
    // keywords: [{
    //     type: String,
    //     required: true,
    //     min: 1
    // }],
    authorId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Moderator', Moderatorchema);