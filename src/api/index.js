const express = require("express");
const articleCreate = require("./articleCreate");
const articleList = require("./articleList"); 
const articleDetail = require("./articleDetail"); 
const articleTest = require("./test"); 

const router = express.Router();

router.use("/article/create", articleCreate);
router.use("/article/list", articleList);
router.use("/article/detail", articleDetail);
router.use("/article/test", articleTest);

module.exports = router;
