const express = require("express");
const { dbConnect } = require("../lib/db/client");

const router = express.Router();

router.post("/article/list", async function (req, res, next) {
  const db = await dbConnect;
  const list = [];

  await db
    .collection("article")
    .find({ status: { $ne: "removed" } }, { projection: { content: 0 } })
    .sort("createTime", -1)
    .forEach((doc) => {
      const item = {
        ...doc,
        id: doc._id,
      };

      delete item._id;
      list.push(item);
    });

  res.xJson({ list });
});

module.exports = router;
