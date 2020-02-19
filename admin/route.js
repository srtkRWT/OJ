const router = require('express').Router();
const Admin = require('./model/Admin');
const Joi = require('@hapi/joi');

const schema = {
    name: Joi.string()
        .min(6)
        .required(),
    email: Joi.string()
        .min(6)
        .required()
        .email(),
    password: Joi.string()
        .min(6)
        .required()
};

router.get('/', async (req, res) => {
    res.send("Admin");
});


module.exports = router;