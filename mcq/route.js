const router = require('express').Router();

router.get('/', async (req, res) => {
    res.send("MCQ");
});


module.exports = router;