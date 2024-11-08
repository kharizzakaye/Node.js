const fs = require("fs");

// sync
// fs.rmdirSync("./rename-me");

// async
// fs.rmdir("./rename-me", function(err) {
//     if (err)
//     {
//         throw err;
//     }

//     console.log("Directory removed.")
// });

// remove files inside folder
fs.readdirSync("./rename-me").forEach((file) => {
    fs.renameSync(`./rename-me/${file}`, `./library/${file}`);
});
  
console.log("Files Removed");
fs.rmdirSync("./accounts");
console.log("Folder Removed");