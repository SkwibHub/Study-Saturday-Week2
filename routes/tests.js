const router = require('express').Router();

const Test = require('../db/models/test')

router.get('/', async function (req, res) {
    try {
        const allMyTests = await Test.findAll();
        res.json(allMyTests);
    } catch (err) {
        next(err)
    }
})


module.exports = router;