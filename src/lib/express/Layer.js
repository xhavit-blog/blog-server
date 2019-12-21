const Layer = require("express/lib/router/layer");

/**
 * 拓展以支持async中间件的错误捕获
 * 参考：https://www.52cik.com/2018/06/29/express-async-errors.html
 */
Layer.prototype.handle_request = function handle(req, res, next) {
  var fn = this.handle;

  if (fn.length > 3) {
    // not a standard request handler
    return next();
  }

  // 如果是async函数
  if (Object.prototype.toString.call(fn) === "[object AsyncFunction]") {
    return fn(req, res, next).catch(next);
  }

  // 如果是常规函数
  try {
    fn(req, res, next);
  } catch (err) {
    next(err);
  }

  // // 也可以统一做如下处理，目前还没想清楚
  // Promise.resolve()
  //   .then(() => fn(req, res, next))
  //   .catch(next);
};
