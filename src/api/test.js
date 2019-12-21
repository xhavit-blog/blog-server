const express = require("express");

const router = express.Router();

router.get("/", async function(req, res, next) {
  //   throw new Error("just a test");
  //   next(new Error("next to handle a error"));
  throw new Error("just a async error");
});

module.exports = router;
