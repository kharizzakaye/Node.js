const fs = require("fs");

let fileContent = `
    This is a new file
    ====================
`;

fs.writeFile("new-file.md", fileContent.trim(), function(err) {
    if (err)
    {
        throw err;
    }

    fs.appendFileSync("new-file.md", "\n added new line!")
    console.log("File updated.")
});