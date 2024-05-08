import { log } from "console";
import http from "http";

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  try {
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>Homepage</h1>");
      } else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>About page</h1>");
      } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>Not found</h1>");
      }
    } else {
      throw new Error("Method not found");
    }
  } catch (error) {
    res.writeHead(500, { "content-type": "text/plain" });
    res.end("server Error");
  }

  console.log(req.url);
  console.log(req.method);
});

server.listen(PORT, () => {
  console.log("server running on port:", PORT);
});
