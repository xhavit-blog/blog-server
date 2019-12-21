const express = require("express");
const { ObjectId } = require("mongodb");
const { dbConnect } = require("../db/client");

const router = express.Router();

router.get("/:id", async function(req, res, next) {
  const { id } = req.params;
  const db = await dbConnect;
  const data = await db
    .collection("article")
    .findOne({ _id: new ObjectId(id) });

  res.xJson(data);
});

module.exports = router;
