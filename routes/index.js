var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/progressLayout", function (req, res, next) {
  res.render("progressLayout", { title: "progressLayout" });
});

module.exports = router;
