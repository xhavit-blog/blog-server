const should = require("should");
const request = require("supertest");

const url = "http://localhost:4444";

describe("/api", function() {
  describe("POST /article/create", function() {
    it("should create an article successfully", async function() {
      const res = await request(url)
        .post("/api/article/create")
        .send({ title: "test title", content: "test content" });

      res.status.should.be.eql(200);
      res.body.should.be.eql({
        code: 0,
        data: { title: "test title", content: "test content" }
      });
    });
  });
});
