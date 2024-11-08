const fs = require("fs");

let fileContent = `
    This is a new file
    ====================
`;

fs.writeFile("new-file.md", fileContent.trim(), function() {
    console.log("File created.")
})