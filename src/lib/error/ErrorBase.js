module.exports = class ErrorBase extends Error {
  constructor(opts) {
    const newOpts = ErrorBase.handleOpts(opts);

    super(newOpts.message);
    ErrorBase.toStdErrObject(this, {}, true);
  }

  /**
   * 将当前错误对象转换成规范的格式
   */
  toStdErrObject() {
    return ErrorBase.toStdErrObject(this);
  }

  /**
   * 统一转化opts参数为对象
   * @param {String | Object} opts 实例化错误对象的参数可以是一个message字符串，或者是一个配置对象
   */
  static handleOpts(opts) {
    let newOpts = opts;

    if (typeof opts === "string") {
      newOpts = {
        message: opts
      };
    }

    return newOpts;
  }

  /**
   * 将错误对象转换成规范的格式
   * @param {Error} err
   * @param {Object} opts 错误配置参数
   * @param {Boolean} self
   */
  static toStdErrObject(err, opts = {}, self = false) {
    const obj = self ? err : {};

    // 错误名称
    obj.name = opts.name || err.name || "";
    // 错误描述
    obj.message = opts.message || err.message || "";
    // d调用栈
    obj.stack = opts.stack || err.stack || "";
    // 业务错误状态码
    obj.code = opts.code || err.code || 1;
    // http状态码
    obj.status = opts.status || err.status || 500;
    // 错误类型
    obj.type = opts.type || err.type || err.constructor.name || "";

    return obj;
  }
};
