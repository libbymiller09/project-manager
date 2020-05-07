const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

const Task = mongoose.model('Task');
const taskController = require('../controllers/taskController');

// Middleware for body-parser
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/tasks', taskController.task_detail);

module.exports = router;
