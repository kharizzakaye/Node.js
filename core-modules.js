const path = require("path");
const util = require("util"); // access to utility functions
const v8 = require("v8"); // memory

console.log(path.basename(__filename));

const dirUploads = path.join(
  __dirname,
  "www",
  "files",
  "uploads"
);

util.log(dirUploads);
util.log(path.basename(__filename));

util.log(v8.getHeapStatistics());