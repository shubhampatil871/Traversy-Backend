import { ifError } from "assert";
import { log } from "console";
import fs from "fs";

fs.readFile("./demo.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
