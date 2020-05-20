var db = require("../db");

module.exports.getProduct = function(req, res) {
  res.render("product/index", {
    products: db.get("products").value()
  });
};
