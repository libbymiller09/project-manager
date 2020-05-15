const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  project: {
    type: String
    // type: Schema.Types.ObjectId,
    // ref: 'Project'
  },
  assigned_user: {
    // type: Schema.Types.ObjectId,
    // ref: 'User'
    type: String
  },
  date: {
    type: Date,
    required: true
  },
  completed: {
    type: Boolean
  }
});

module.exports = mongoose.model("Ticket", ticketSchema);
