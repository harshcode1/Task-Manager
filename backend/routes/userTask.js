const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const fetchUser = require('../middleware/fetchUser');
const Task = require('../models/task'); // Changed from 'task' to 'Task'

router.post('/getAllTasks', fetchUser, async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.json(tasks);
    } catch (e) {
        console.log(e.message);
        return res.status(400).send("Some Error Occurred");
    }
});

router.post('/createtask', [
    body('title', 'It should contain at least 2 Characters').isLength({ min: 2 }),
    body('description', 'It should contain at least 5 Characters').isLength({ min: 5 }),
    body('dueDate', 'There should be a valid date and it should not be in the past').isDate().toDate(),
], async (req, res) => {
    try {
        const { title, description, dueDate, PriorityLevel, Labels } = req.body;
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }

        const newTask = new Task({ // Changed variable name to newTask
            title, description, dueDate, PriorityLevel, Labels, user: req.user.id
        });
        const savedTask = await newTask.save(); // Await the save operation
        res.json(savedTask);
    } catch (e) {
        console.log(e);
        return res.status(400).send("Some Error " + e + " has been Occurred");
    }
});

//Update a TASK
router.put('/updateTask/:id',fetchUser, async(req,res) => {
    try{
        const {title, description, dueDate, PriorityLevel, Labels} = req.body;
        const newTask = {};
        if(title) newTask.title = title;
        if(description) newTask.description = description;
        if(dueDate) newTask.dueDate = dueDate;
        if(PriorityLevel) newTask.PriorityLevel = PriorityLevel;
        if(Labels) newTask.Labels = Labels;

        let Existingtask = await Task.findById(req.params.id);
        if(!Existingtask) res.status(404).send("No user exists");

        if(Existingtask.user.toString() !== req.user.id){
            return res.status(401).send("Invalid")
        }

        Existingtask = await Task.findByIdAndUpdate(req.params.id,{$set: newTask},{new: true})
    }catch(e){
        console.log(e.message);
        return res.status(401).send("Some Error Occured");
    }
})

//Delete a Task
router.delete('/deleteTask/:id', fetchUser , async (req,res) =>{
    try{
        const {title, description, dueDate, PriorityLevel, Labels} = req.body;

        const Existingtask = await Task.findById(req.param.id);
        if(!Existingtask) res.status(404).send("No user exists");

        if(Existingtask.user.toString() !== req.user.id){
            return res.status(401).send("Invalid")
        }

        Existingtask = await Task.findByIdAndDelete(req.params.id);
        res.json({Deleted:"Successfully Deleted"});
    }catch(e){
        console.log(e.message);
        return res.status(400).send("Some Error Occured");
    }
})

module.exports = router;
