const express = require("express");
const { dbConnect } = require("../db/client");

const router = express.Router();

router.post("/", function(req, res, next) {
  let { title, content } = req.body;
  const resData = {
    errMsg: ""
  };

  title = title.trim();
  content = content.trim();

  if (!title) {
    resData.errMsg = "请输入文章标题";
    res.json(resData);
    return;
  }

  if (!content) {
    resData.errMsg = "请输入文章内容";
    res.json(resData);
    return;
  }

  dbConnect.then(db => {
    const collection = db.collection("article");
    const now = new Date();

    db.collection("article").insertOne(
      { title, content, createTime: now, updateTime: now },
      function(err) {
        if (err) return next(err);

        res.json({ errMsg: "", data: { title, content } });
      }
    );
  });
});

module.exports = router;
