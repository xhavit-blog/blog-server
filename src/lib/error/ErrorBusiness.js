const ErrorBase = require("./ErrorBase");

module.exports = class ErrorBusiness extends ErrorBase {
  constructor(opts) {
    const newOpts = ErrorBase.handleOpts(opts);

    newOpts.status = newOpts.status || 200;
    super(newOpts);
  }
};
