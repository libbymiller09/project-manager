const Ticket = require("../models/Ticket");

exports.ticket_overview = function(req, res) {
  Ticket.find()
    .then(tickets => {
      res.render("ticket-detail", { title: "Listing Tickets", tickets });
    })
    .catch(() => {
      res.send("Sorry! Something went wrong");
    });
};

exports.ticket_details = function(req, res) {
  Ticket.findById(req.params.id, function(err, ticket) {
    if (err) return next(err);
    res.send(ticket);
  });
};

exports.ticket_create = function(req, res) {
  let ticket = new Ticket({
    title: req.body.title,
    project: req.body.project,
    assigned_user: req.body.assigned_user,
    date: req.body.date
  });
  ticket.save(function(err) {
    if (err) {
      return next(err);
    }
    res.redirect("/ticket");
  });
};

exports.ticket_delete = function(req, res) {
  Ticket.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.redirect("/ticket");
  });
};

exports.ticket_update = function(req, res) {
  Ticket.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    ticket
  ) {
    if (err) return next(err);
    res.redirect("/ticket");
  });
};
