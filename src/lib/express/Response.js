const ResponsePrototype = require("express/lib/response");
const { createRes, createErrRes } = require("../http");

/**
 * 新增Response Prototype方法，以便api数据的输出
 */
ResponsePrototype.xJson = function xJson(data) {
  this.json(createRes(data));
};
ResponsePrototype.xJsonErr = function xJsonErr(...args) {
  const err = createErrRes(...args);
  this.json(err);
};
