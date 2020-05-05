const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');

const Project = mongoose.model('Project');

//middleware for the bodyparser
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json( { type: "*/*" } ));
let urlencodedParser = bodyParser.json();

router.get('/projects', (req, res) => {
  Project.find()
    .then(projects => {
      res.render('projects-overview', { title: 'Listing Projects', projects });
    })
    .catch(() => { res.send('Sorry! Something went wrong'); });
});

module.exports = router;
