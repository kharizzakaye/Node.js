const fs = require("fs");

// sync
// fs.unlinkSync("./del.js");

// async
fs.unlink("del.js", function(err) {
    if (err)
    {
        throw err;
    }

    console.log("File removed.")
});