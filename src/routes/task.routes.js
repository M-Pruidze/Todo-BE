const express = require('express');
const router = express.Router();

// importing controllers
const {
    allTasks,
    newTask,
    updatedTask,
    deletedTask
  } = require('../controllers/task.controllers');

// task routes
router.get('/allTasks', allTasks);
router.post('/newTask', newTask);
router.put('/updatedTask/:id', updatedTask);
router.delete('/deletedTask/:id', deletedTask);

module.exports = router;
