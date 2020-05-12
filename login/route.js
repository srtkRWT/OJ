const router = require('express').Router();
const Admin = require('../admin/model/Admin');
const JWT = require('jsonwebtoken');

const {
    JWT_SECRET = 'secret ;P'
} = process.env;

router.post('/admin/', async (req, res) => {
    const req_email = req.body.email;
    const req_password = req.body.password;


    if (req_email == undefined || req_password == undefined) {
        res.json({
            err: "Auth error"
        }); return;
    }

    try {
        Admin.find({
            email: req_email,
            password: req_password
        }, (err, data) => {
            if (err || data.length != 1) {
                res.json({
                    err: "Auth error"
                });
                return;
            }
            const token = JWT.sign({ email: req_email }, JWT_SECRET);
            console.log(token);
            res.json({
                token
            });
        });
    } catch (e) {
        console.log(e);
    }
});
//adding comment for testing

module.exports = router;