const Task = require('../models/Task');

exports.task_overview = function (req, res) {
  Task.find()
    .then(tasks => {
      res.render('tasks-overview', { title: 'Listing Tasks', tasks });
    })
    .catch(() => { res.send('Sorry! Something went wrong'); });
};

exports.task_details = function (req, res) {
  Task.findById(req.params.id, function (err, task) {
    if (err) return next(err);
    res.send(task);
  });
};

exports.task_create = function (req, res) {
  let task = new Task(
    {
      title: req.body.title,
      project: req.body.project,
      assigned_user: req.body.assigned_user,
      date: req.body.date
    }
  );
  task.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Task created successfully');
  });
};

exports.task_delete = function (req, res) {
  Task.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send('Task Deleted Successfully');
  });
};

exports.task_update = function (req, res) {
  Task.findByIdAndUpdate(req.params.id, {$set: req.body},
  function (err, task) {
    if (err) return next(err);
    res.send('Task updated');
  });
};
