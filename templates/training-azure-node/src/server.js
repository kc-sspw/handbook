const http = require("node:http");

function handler(req, res) {
  if (req.url === "/health") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }

  res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  res.end("Hello from KC SSPW training!\n");
}

if (require.main === module) {
  const port = process.env.PORT || 3000;
  http.createServer(handler).listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = { handler };
