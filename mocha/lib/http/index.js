const should = require("should");
const { createRes, createErrRes } = require("../../../src/lib/http");

describe("lib/http", function() {
  describe("createRes", function() {
    it("should return a object with property code and data", function() {
      createRes({ a: 1 }).should.be.eql({
        code: 0,
        data: { a: 1 }
      });
    });
  });

  describe("createErrRes", function() {
    it("should return a object with property name, message, stack, code, status and type", function() {
      createErrRes(new Error("test error")).should.have.properties([
        "name",
        "message",
        "stack",
        "code",
        "status",
        "type"
      ]);
    });

    it("should return a object with property type being equal to Error's constructor", function() {
      createErrRes(new Error("test error")).type.should.be.eql("Error");
    });
  });
});
