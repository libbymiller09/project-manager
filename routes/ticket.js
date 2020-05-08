const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bodyParser = require("body-parser");

const Ticket = mongoose.model("Ticket");
const ticketController = require("../controllers/ticketController");

// Middleware for body-parser
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", ticketController.ticket_overview);

router.get("/form", (req, res) => {
  res.render("ticket-form", { title: "Ticket Form" });
});

router.post("/form", ticketController.ticket_create);

router.get("/update-form", (req, res) => {
  res.render("ticket-update-form", { title: "Update Ticket Form" });
});

// router.get('/update-form/:id', ticketController.ticket_update);

// router.put('/update-form/:id', ticketController.ticket_update);

router.get("/remove/:id", ticketController.ticket_delete);

module.exports = router;
