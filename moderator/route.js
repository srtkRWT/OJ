const router = require('express').Router();

router.get('/', async (req, res) => {
    res.send("Moderator");
});


module.exports = router;