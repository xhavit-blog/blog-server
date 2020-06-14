const express = require("express");
const ErrorBusiness = require("../lib/error/ErrorBusiness");
const { dbConnect } = require("../lib/db/client");

const router = express.Router();

router.post("/article/add", async function (req, res, next) {
  let { title, content } = req.body;

  title = title.trim();
  content = content.trim();

  if (!title) {
    res.xJsonErr(new ErrorBusiness("请输入文章标题"));
    return;
  }

  if (!content) {
    res.xJsonErr(new ErrorBusiness("请输入文章内容"));
    return;
  }

  const db = await dbConnect;
  const now = new Date();
  const data = {
    title,
    content,
    createTime: now,
    updateTime: now,
  };

  await db.collection("article").insertOne(data);

  res.xJson({ id: data._id });
});

module.exports = router;
