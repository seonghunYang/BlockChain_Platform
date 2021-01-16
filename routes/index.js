var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/progressLayout", function (req, res, next) {
  res.render("progress/progressLayout", { title: "progressLayout" });
});

router.get("/register", function (req, res, next) {
  res.render("register", { title: "register" });
});

router.get("/authLayout", function (req, res, next) {
  res.render("authLayout", { title: req.query.title });
});

module.exports = router;
