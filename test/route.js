const router = require('express').Router();

router.get('/', async (req, res) => {
    res.send("Test");
});


module.exports = router;