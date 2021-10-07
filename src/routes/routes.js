const express = require('express');
const router = express.Router();

// importing controllers
const {
    getTasks,
    createTask,
    updateTask,
    deleteTask
  } = require('../controllers/task.controllers');

// task routes
router.get('/getTasks', getTasks);
router.post('/createTask', createTask);
router.put('/updateTask/:id', updateTask);
router.delete('/deleteTask/:id', deleteTask);

module.exports = router;