const fs = require("fs");

if (fs.existsSync("new-directory"))
{
    console.log("Directory already exists.")
}

fs.mkdir("new-directory", function(err) {
    if (err)
    {
        console.log(err);
    }
    else
    {
        console.log("Directory created!");
    }
});