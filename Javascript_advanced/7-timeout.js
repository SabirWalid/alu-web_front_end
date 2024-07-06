console.log("Start of the execution queue");

// Logging numbers from 1 to 100 using a loop
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

console.log("End of the loop printing");

// Using setTimeout to log after the current execution context
setTimeout(function() {
    console.log("Final code block to be executed");
}, 0);