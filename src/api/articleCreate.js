const express = require("express");
const ErrorBusiness = require("../lib/error/ErrorBusiness");
const { dbConnect } = require("../db/client");

const router = express.Router();

router.post("/", async function(req, res, next) {
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

  await db.collection("article").insertOne({
    title,
    content,
    createTime: now,
    updateTime: now
  });

  res.xJson({ title, content });
});

module.exports = router;
