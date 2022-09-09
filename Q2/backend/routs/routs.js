const express = require('express');

const router = express.Router();

const signControllers = require('../controller/controllers');

router.post('/signUP',signControllers.signUp);
router.post('/signIn',signControllers.signIn);

module.exports = router;
