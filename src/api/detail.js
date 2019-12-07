const express = require("express");
const { ObjectId } = require("mongodb");
const { dbConnect } = require("../db/client");

const router = express.Router();

router.get("/:id", function(req, res, next) {
  const { id } = req.params;

  if (!id) {
    res.json({ errMsg: "no data" });
    return;
  }

  dbConnect
    .then(db => {
      const collection = db.collection("article");

      db.collection("article")
        .findOne({ _id: new ObjectId(id) })
        .then(data => {
          if (!data) {
            res.json({ errMsg: "no data" });
          } else {
            res.json(data);
          }
        })
        .catch(next);
    })
    .catch(next);
});

module.exports = router;
