const express = require('express');
const router = express.Router();
const { createUser, loginUser } = require('../controller/user');
// const { getUsers, createUser, getUserById, loginUser } = require('../controller/user');

// router.get('/', getUsers);
// router.get('/:id', getUserById);

router.post('/login', loginUser);
router.post('/signup', createUser);

module.exports = router;