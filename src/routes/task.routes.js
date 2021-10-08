const express = require('express');
const router = express.Router();

// importing controllers
const {
    allTasks,
    newTask,
    updatedTask,
    deletedTask,
    deleteAllTasks,
  } = require('../controllers/task.controllers');

// task routes
router.get('/task', allTasks);
router.post('/task', newTask);
router.put('/task/:id', updatedTask);
router.delete('/task/:id', deletedTask);
router.delete('/task/', deleteAllTasks);


module.exports = router;
