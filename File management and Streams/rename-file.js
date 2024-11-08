const fs = require("fs");

// sync
// fs.renameSync("./renameme.js", "./rename-me.js");
// console.log("File renamed!")


// async
fs.rename("./renameme.js", "./rename-me.js", function(err) {
    if (err)
    {
        throw err;
    }

    console.log("File renamed!")
});