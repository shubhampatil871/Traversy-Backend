import { log } from "console";
import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        // res.writeHead(200, { "content-type": "text/html" });
        // res.end("<h1>Homepage</h1>");
        filePath = path.join(__dirname, "public", "home.html");
      } else if (req.url === "/about") {
        // res.writeHead(200, { "content-type": "text/html" });
        // res.end("<h1>About page</h1>");
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        // res.writeHead(404, { "content-type": "text/html" });
        // res.end("<h1>Not found</h1>");
        throw new Error("Page not found");
      }

      const data = await fs.readFile(filePath);
      res.setHeader("content-type", "text/html");
      res.write(data);
      res.end();
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
