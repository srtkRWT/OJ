const router = require('express').Router();

router.get('/', async (req, res) => {
    res.send("T_S");
});


module.exports = router;