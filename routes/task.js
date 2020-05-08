const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');

const Task = mongoose.model('Task');
const taskController = require('../controllers/taskController');

// Middleware for body-parser
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', taskController.task_overview);

router.get('/form', (req, res) => {
  res.render('task-form', { title: 'Task Form' });
});

router.post('/form', taskController.task_create);

router.get('/update-form', (req, res) => {
  res.render('task-update-form', { title: 'Update Task Form'});
});

// router.get('/update-form/:id', taskController.task_update);

// router.put('/update-form/:id', taskController.task_update);

router.get('/remove/:id', taskController.task_delete);

module.exports = router;
