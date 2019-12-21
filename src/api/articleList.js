const express = require("express");
const { dbConnect } = require("../db/client");

const router = express.Router();

router.get("/", async function(req, res, next) {
  const db = await dbConnect;
  const data = await db
    .collection("article")
    .find({})
    .sort("createTime", -1)
    .toArray();

  res.xJson(data);
});

module.exports = router;
