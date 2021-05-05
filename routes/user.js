const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.post('/users', userController.getUsers);

router.post('/search', userController.searchByName);

module.exports = router;
