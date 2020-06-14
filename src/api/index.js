const express = require("express");
const articleAdd = require("./articleAdd");
const articleList = require("./articleList");
const articleDetail = require("./articleDetail");
const articleRemove = require("./articleRemove");
const articleUpdate = require("./articleUpdate");
const articleTest = require("./test");

const router = express.Router();

router.use(articleAdd);
router.use(articleList);
router.use(articleDetail);
router.use(articleRemove);
router.use(articleUpdate);
router.use(articleTest);

module.exports = router;
