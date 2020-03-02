const router = require('express').Router();
const Admin = require('./model/Admin');
const Joi = require('@hapi/joi');

const schema = Joi.object({
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
});

//get all admins
router.get('/', async (req, res) => {
    const id = req.params.id;
    const result = await Admin.find();

    console.log(result);
    res.send(result);
});


// add new admin
router.post('/', async (req, res) => {
    console.log(req.body);

    const validation = schema.validate(req.body);

    if (validation.error) {
        res.status(400).send(validation.error);
        return;
    }
    const admin = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const saveAdmin = await admin.save();
        res.send(saveAdmin);
    } catch (err) {
        res.status(400).send(err);
    }
});


module.exports = router;