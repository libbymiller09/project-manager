const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

const Project = mongoose.model('Project');

// Middleware for body-parser
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/form', (req, res) => {
  res.render('project-form', { title: 'Project Form' });
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
        // .then(() => { res.send('Project added successfully!'); })
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

router.get('/projects', (req, res) => {
  Project.find()
    .then(projects => {
      res.render('projects-overview', { title: 'Listing Projects', projects });
    })
    .catch(() => { res.send('Sorry! Something went wrong'); });
});

// router.post('/')

module.exports = router;
