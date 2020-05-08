const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
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
  },
  completed: {
    type: Boolean
  }
});

module.exports = mongoose.model("Ticket", ticketSchema);
