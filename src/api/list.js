const express = require("express");
const { dbConnect } = require("../db/client");

const router = express.Router();

router.get("/", function(req, res, next) {
  dbConnect.then(db => {
    const collection = db.collection("article");

    db.collection("article")
      .find({})
      .sort("createTime", -1)
      .toArray()
      .then(data => {
        res.json(data);
      });
  });
});

module.exports = router;
