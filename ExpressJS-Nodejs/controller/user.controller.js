var db = require("../db");
var shortId = require("shortid");

module.exports.index = function(req, res) {
  res.render("users/index", {
    users: db.get("users").value()
  });
};

module.exports.search = function(req, res) {
  var q = req.query.q;
  var matchUser = db
    .get("users")
    .value()
    .filter(function(item) {
      return item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

  res.render("users/index", {
    users: matchUser
  });
};

module.exports.create = function(req, res) {
  console.log(req.cookies);
  res.render("users/create");
};

module.exports.view = function(req, res) {
  var id = req.params.id;

  var user = db
    .get("users")
    .find({ id: id })
    .value();
  res.render("users/view", {
    user: user
  });
};

module.exports.postCreate = function(req, res) {
  req.body.id = shortId.generate();

  db.get("users")
    .push(req.body)
    .write();
  res.redirect("/users");
};

module.exports.testCookie = function(req, res) {
  res.cookie("user-id", 12345);
  res.send("Hello");
};
