const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  project: {
    type: String,
    required: true,
    trim: true
  },
  assigned_user: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Task", taskSchema);
