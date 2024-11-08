// process.argv is used to access and interact with the command line arguments

// process.argv[0] => absolute path for node
// process.argv[1] => absolute path for js file
// process.argv[2] and above => other args passed by the user


// console.log(process.argv); // node process-argv "arg 1" "arg 2"

function grab(flag) {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

let greeting = grab("--greeting");
let user = grab("--user");

console.log(greeting);
console.log(user); // node process-argv --user Kharizza --greeting "Hi there!"
  