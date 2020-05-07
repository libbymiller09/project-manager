const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

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

router.post('/form',
  [
    check('title')
      .isLength({ min: 1 })
      .withMessage('Please add a title'),
    check('description')
      .isLength({ min: 1 })
      .withMessage('Please add a description'),
    check('owner')
      .isLength({ min: 1 })
      .withMessage('Please add an owner'),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const project = new Project(req.body);
      project.save()
        .catch((err) => {
          console.log(err);
          res.send('Sorry something went wrong!');
        });
    } else {
      res.render('form', {
        title: 'Project form',
        errors: errors.array(),
        data: req.body
      });
    }
    res.render('project-form', { title: 'Project Form' });
  });

router.get('/update-form', (req, res) => {
  res.render('project-update-form', { title: 'Update Project Form'});
});

router.get('/projects', projectController.project_overview);

router.delete('/projects', projectController.project_delete);

module.exports = router;
