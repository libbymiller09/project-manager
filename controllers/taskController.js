const Task = require('../models/Task');

exports.task_detail = function (req, res) {
  Task.find()
    .then(task => {
      res.render('task-detail', { title: 'Listing Tasks', task });
    })
    .catch(() => { res.send('Sorry! Something went wrong'); });
};
