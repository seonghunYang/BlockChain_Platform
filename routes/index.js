var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/progressLayout", function (req, res, next) {
  res.render("progress/progressLayout", { title: "progressLayout" });
});

router.get("/registerLayout", function (req, res, next) {
  res.render("registerLayout", { title: "register" });
});

router.get("/authLayout", function (req, res, next) {
  res.render("authLayout", { title: req.query.title });
});

router.get("/storeLayout", function (req, res, next) {
  res.render("storeLayout");
});

module.exports = router;
