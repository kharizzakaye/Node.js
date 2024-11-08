const waitTime = 3000;
console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () =>{
    clearInterval(interval) // stops timer created by setInterval()
    console.log("Finished");
}

setTimeout(timerFinished, waitTime); // param1 = function, param2 = delay in ms

const waitInterval = 500;
let currentTime = 0;
const incTime = () => {
    currentTime += waitInterval;

    const value = Math.floor((currentTime / waitTime) * 100);
    // process.stdout.clearLine();
    process.stdout.cursorTo(0); // move back cursor to start
    process.stdout.write(`waiting.... ${value}% `);
};

const interval = setInterval(incTime, waitInterval);