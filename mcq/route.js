const router = require('express').Router();
const Joi = require('@hapi/joi');
const MOQ = require('./model/MCQ');
const verifyToken = require('../middleWares/verifyToken');

const schema = Joi.object({
    uid: Joi.string()
        .min(8)
        .required(),
    title: Joi.string()
        .min(1)
        .required(),
    statement: Joi

});

router.get('/', async (req, res) => {
    // send all mcqs
});

router.get('/:n/:offset', async (req, res) => {
    // send top 'n' mcqs ignoring 'offset' number of mcqs
});


router.post('/', async (req, res) => {
    // add a new mcq
});

router.put('/:authorId/:mcqId', async (req, res) => {
    // update a mcq
});

router.delete('/:id', async (req, res) => {
    //delete the mcq with _id === id
});


module.exports = router;