const fs = require("fs");

// synchronous
// let readFile = fs.readFileSync("./readme.md", "UTF-8");
// console.log(readFile);

// async
fs.readFile("./readme.md", "UTF-8", (err, readFile) => {
    console.log(readFile);
});