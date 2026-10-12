
const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  if (req.url === "/api/status" && req.method === "GET") {
    res.writeHead(200);
    return res.end(JSON.stringify({
      success: true,
      message: "Y2Mate Pro backend is running!"
    }));
  }

  if (req.url === "/api/download" && req.method === "GET") {
    res.writeHead(200);
    return res.end(JSON.stringify({
      success: true,
      message: "Download endpoint is responding.",
      downloadEnabled: false,
      note: "Actual authorized file downloading is not configured yet."
    }));
  }

  res.writeHead(404);
  res.end(JSON.stringify({
    success: false,
    message: "Route not found"
  }));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
