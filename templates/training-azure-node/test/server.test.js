const test = require("node:test");
const assert = require("node:assert/strict");
const { handler } = require("../src/server");

function createResponse() {
  return {
    statusCode: null,
    headers: null,
    body: "",
    writeHead(statusCode, headers) {
      this.statusCode = statusCode;
      this.headers = headers;
    },
    end(chunk = "") {
      this.body += chunk;
    }
  };
}

test("health endpoint returns ok", () => {
  const req = { url: "/health" };
  const res = createResponse();

  handler(req, res);

  assert.equal(res.statusCode, 200);
  assert.equal(JSON.parse(res.body).status, "ok");
});
