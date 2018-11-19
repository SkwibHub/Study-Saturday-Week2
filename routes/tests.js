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

router.get('/:id', async function (req, res) {
    try {
        const testId = req.params.id;
        const myTest = await Test.findById(testId);
        if (!myTest) {
            res.sendStatus(404);
        }
        res.json(myTest);
    } catch(err) {
        next(err)
    }
})

/*
router.post('/', async function (req, res) {
    try {
        const newTest = await Test.create(req.body);
        res.status(201).json(newTest);
    } catch (err) {
        next(err);
    }
});
*/

router.delete('/:id', async function(req, res) {
    try {
        const testId = req.params.id;
        await Test.destroy({
            where: {
                id: testId
            }
        });
        res.sendStatus(204);
    } catch (err) {
        next(err)
    }
});

module.exports = router;