const fs = require("fs");

// sync
fs.renameSync("./renameme", "rename-me");
console.log("Directory renamed!");