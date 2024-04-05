var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// POST login
router.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  res.render("response", { title: "Simple express app", email, password });
});

router.get("/login", (req, res, next) => {
  res.render("response", { title: "Simple express app" });
});

module.exports = router;
