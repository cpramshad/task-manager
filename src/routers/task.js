const express = require('express');
const Task = require('../models/task');
const auth = require('../middleware/auth');
const router = new express.Router();

router.post('/tasks', auth, async (req, res) => {
    // const task = new Task(req.body);
    const task = new Task({
        ...req.body,
        owner: req.user._id
    });
    console.log(task);

    try {
        await task.save();
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.send(tasks);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findById(_id);
        if (!task) {
            return res.status(404).send();
        }
        return res.send(task);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.patch('/tasks/:id', async(req, res) => {
    console.log('patchtasks');
    const receivedUpdates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isValidOperation = receivedUpdates.every(update => allowedUpdates.includes(update));

    if(!isValidOperation) {
        res.status(400).send({error: "Invalid Updates!"});
    }

    try {
        // const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        const task = await Task.findById(req.params.id);
        if(!task) {
            res.status(404).send();
        }
        receivedUpdates.forEach(update => task[update] = req.body[update]);
        await task.save();
        res.send(task);

    } catch(e) {
        res.status(400).send(e);
    }
});

router.delete('/tasks/:id', async(req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch(e) {
        res.status(500).send(e);
    }
});

module.exports = router;