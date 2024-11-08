// require the path module to use in the application
// path module allows us to work with file and directory paths
const path = require("path");

// directory of the currently executing file (absolute path)
console.log(__dirname);

// returns the filename
console.log(`The file name is ${path.basename(__filename)}`);

// path.basename => extracts filename from file path

for (let key in global)
{
    console.log(key)
}