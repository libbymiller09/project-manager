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
    res.send(project);
  });
};

exports.project_delete = function (req, res) {
  Project.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send('Project Deleted Successfully');
  });
};
