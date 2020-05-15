const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');

const Project = mongoose.model('Project');
const projectController = require('../controllers/projectController');

// Middleware for body-parser
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', projectController.project_overview);

router.get('/form', (req, res) => {
  res.render('project-form', { title: 'Project Form' });
});

router.post('/form', projectController.project_create);

router.get('/:id', projectController.project_details);

router.get('/update-form/:id', (req, res) => {
  const id = req.params.id;
  Project.find({}, (err, projects) => {
    res.render('project-update-form', { title: 'Update Project Form', _id: id });
  });
});

router.post('/update-form/:id', projectController.project_update);

router.get('/remove/:id', projectController.project_delete);

module.exports = router;
