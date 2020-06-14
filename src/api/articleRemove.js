const express = require("express");
const { ObjectId } = require("mongodb");
const { dbConnect } = require("../lib/db/client");

const router = express.Router();

router.delete("/article/remove/:id", async function (req, res, next) {
  const { id } = req.params;
  const db = await dbConnect;

  await db
    .collection("article")
    .updateOne({ _id: new ObjectId(id) }, { $set: { status: "removed" } });

  res.status(204).send("");
});

module.exports = router;
