var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "main" });
});

router.get("/progressLayout", function (req, res, next) {
  res.render("progress/progressLayout", { title: "progressLayout" });
});

router.get("/registerLayout", function (req, res, next) {
  res.render("registerLayout", { title: "register", seller: {} });
});

router.get("/authLayout", function (req, res, next) {
  res.render("authLayout", { title: req.query.title });
});

router.get("/storeLayout", function (req, res, next) {
  res.render("storeLayout");
});

router.get("/authLayout", function (req, res, next) {
  res.render("authLayout", { prodctTitle: req.query.title });
});

router.get("/authLayout", function (req, res, next) {
  res.render("authLayout", { productExplain: req.query.title });
});

router.get("/category", function (req, res, next) {
  res.render("category", { title: req.query.title });
});

module.exports = router;
