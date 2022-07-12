const express = require('express');

const authController = require('../controllers/auth.controller')

const router = express.Router(); 

router.get('/signup', authController.getSignup); //path for route, then these route handlers take middleware functions as arguement. One 

router.get('/login', authController.getLogin);

module.exports = router; 