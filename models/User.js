const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  // projects: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Project'
  // },
  // tickets: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Ticket'
  // },
});

module.exports = mongoose.model("User", userSchema);
