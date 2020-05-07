const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');

const Project = mongoose.model('Project');
const projectController = require('../controllers/projectController');

// Middleware for body-parser
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/form', (req, res) => {
  res.render('project-form', { title: 'Project Form' });
});

router.get('/details', (req, res) => {
  res.render('project-detail', { title: 'Project Details' });
});

router.get('/details', projectController.project_details);

router.post('/form', projectController.project_create);

router.get('/update-form', (req, res) => {
  res.render('project-update-form', { title: 'Update Project Form'});
});

router.put('/update-form', projectController.project_update);

router.get('/projects', projectController.project_overview);

router.delete('/projects', projectController.project_delete);

module.exports = router;
