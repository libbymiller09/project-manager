const Project = require('../models/Project');

exports.project_overview = function (req, res) {
  Project.find()
    .then(projects => {
      res.render('projects-overview', { title: 'Listing Projects', projects });
    })
    .catch(() => { res.send('Sorry! Something went wrong'); });
};

exports.project_details = function (req, res) {
  Project.findById(req.params.id, function (err, project) {
    if (err) return next(err);
    res.render('project-detail', { title: 'Project Details' });
  });
};

exports.project_create = function (req, res) {
  let project = new Project(
    {
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      owner: req.body.owner
    }
  );
  project.save(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/project/projects');
  });
};

exports.project_delete = function (req, res) {
  Project.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.redirect('/project/projects');
  });
};

exports.project_update = function (req, res) {
  Project.findByIdAndUpdate(req.params.id, {$set: req.body},
  function (err, project) {
    if (err) return next(err);
    res.redirect('/project/projects');
  });
};
