const express = require("express");
const articleCreate = require("./create");
const articleList = require("./list"); 
const articleDetail = require("./detail"); 

const router = express.Router();

router.use("/article/create", articleCreate);
router.use("/article/list", articleList);
router.use("/article/detail", articleDetail);

module.exports = router;
