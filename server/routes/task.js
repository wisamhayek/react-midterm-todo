const express = require('express');
const router = express.Router();
const {createTask, getTaskByUser, deleteTaskByUser, updateTaskByUser } = require('../controller/task');
// const {getTasks, createTask, getTaskById, getTaskByUser, deleteTaskByUser, updateTaskByUser } = require('../controller/task');

// router.get('/', getTasks);

// router.get('/:id', getTaskById);

router.post('/', createTask);

router.get('/byUser', getTaskByUser);
router.delete('/byUser', deleteTaskByUser);
router.put('/byUser', updateTaskByUser);

module.exports = router;