process.stdout.write("Hello  \n \n"); // Display Hello

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language"
];

const answers = [];

function ask(i = 0) 
{
    process.stdout.write(`${questions[i]} >`);
}

ask();

process.stdin.on("data", function (data) 
{
    answers.push(data.toString().trim());
    
    if (answers.length < questions.length) 
    {
        ask(answers.length);
    } 
    else 
    {
        process.exit();
    }
});

// call this function when we call exit
process.on("exit", function () 
{
    process.stdout.write(
        `\n Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`
    );
});
