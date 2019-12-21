const ErrorBase = require("../error/ErrorBase");

/**
 * 创建用于response返回到前端的数据对象
 * @param {*} data
 */
function createRes(data) {
  return {
    code: 0,
    data
  };
}

/**
 * 创建用于response返回到前端的错误对象
 */
function createErrRes(err) {
  return ErrorBase.toStdErrObject(err);
}

exports.createRes = createRes;
exports.createErrRes = createErrRes;
