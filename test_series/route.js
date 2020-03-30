const router = require('express').Router();
const Joi = require('@hapi/joi');
const TestSeries = require('./model/TestSeries');

router.get('/', async (req, res) => {
    // send all ts
});

router.get('/:n/:offset', async (req, res) => {
    // send top 'n' ts ignoring 'offset' number of ts
});


router.post('/', async (req, res) => {
    // add a new ts
});

router.put('/:authorId/:mcqId', async (req, res) => {
    // update a ts
});

router.delete('/:id', async (req, res) => {
    //delete the ts with _id === id
});


module.exports = router;