const router = require('express').Router();

router.get('/', async (req, res) => {
    res.send("Student");
});


module.exports = router;