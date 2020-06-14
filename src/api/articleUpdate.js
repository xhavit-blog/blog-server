const express = require("express");
const { ObjectId } = require("mongodb");
const { dbConnect } = require("../lib/db/client");

const router = express.Router();

router.post("/article/update/:id", async function (req, res, next) {
  const { id } = req.params;
  const { title, content } = req.body;
  const db = await dbConnect;

  await db
    .collection("article")
    .updateOne({ _id: new ObjectId(id) }, { $set: { title, content } });

  res.xJson();
});

module.exports = router;
