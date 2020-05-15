const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  owner: {
    type: String,
  },
  // owner: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  // tickets: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Ticket'
  // },
  completed: {
    type: Boolean
  }
});

module.exports = mongoose.model("Project", projectSchema);
