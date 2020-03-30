const router = require('express').Router();
const User = require('./model/User');
const Joi = require('@hapi/joi');
const verifyToken = require('../middleWares/verifyToken');

const schema = Joi.object({
    name: Joi.string()
        .min(6)
        .required(),
    email: Joi.string()
        .min(6)
        .required()
        .email(),
    phno: Joi.number()
        .min(6000000000)
        .max(9999999999),
    password: Joi.string()
        .min(6)
        .required()
});


//TODO: instead to fetching all users...fetch 'N' users with an offset.
//TODO: delete user
//get all users
router.get('/', verifyToken, async (req, res) => {
    //const id = req.params.id;
    const result = await User.find();

    console.log(result);

    res.send(result);
});


// add new user
router.post('/', verifyToken, async (req, res) => {
    console.log(req.body);

    const validation = schema.validate(req.body);

    if (validation.error) {
        res.status(400).send({
            err: validation.error
        });
        return;
    }
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phno: req.body.phno,
        password: req.body.password
    });

    try {
        const saveUser = await user.save();
        res.send(saveUser);
    } catch (err) {
        res.status(400).send({ err });
    }
});

router.put('/:id', verifyToken, async (req, res) => {
    const _id = req.params.id;
    User.findOne({ _id }, (err, data) => {
        if (err) {
            console.log(err);
            res.send(400).send({ err });
            return;
        }

        if (req.body.name) data.name = req.body.name;
        if (req.body.email) data.email = req.body.email;
        if (req.body.phno) data.phno = req.body.phno;
        if (req.body.password) data.npasswordame = req.body.password;
        data.save();
        res.send({ data });
    });
});


module.exports = router;