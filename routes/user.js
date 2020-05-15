// Required Modules
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bodyParser = require("body-parser");

const User = mongoose.model("User");

router.get("/", (req, res) => {
  res.render("user", { title: "Profile Dashboard" });
});

module.exports = router;
