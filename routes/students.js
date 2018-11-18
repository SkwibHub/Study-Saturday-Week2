const router = require('express').Router();
const Student = require('../db/models/student');

router.get('/', async function (req, res) {
    try {
        const allMyStudents = await Student.findAll();
        res.json(allMyStudents);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async function (req, res) {
    try {
        const studentId = req.params.id;
        const myStudent = await Student.findById(studentId);
        if (!myStudent) {
            res.sendStatus(404);
        }
        res.send(myStudent);
    } catch (err) {
        next(err);
    }
});

router.post('/', async function (req, res) {
    try {
        const newStudent = await Student.create(req.body);
        res.status(201).json(newStudent);
    } catch (err) {
        next(err);
    }
});

router.put(',/:id', async function (req, res) {
    try {
        const studentId = req.params.id;
        const myStudent = await Student.findById(studentId);
        if (!myStudent) {
            res.sendStatus(404);
        }
        
    } catch (err) {
        next(err);
    }
})


module.exports = router;