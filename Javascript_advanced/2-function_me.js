function welcomeMessage(fullName) {
    return function() {
        console.log(`Welcome ${fullName}`);
    };
}

// Assigning closures to variables
let guillaume = welcomeMessage('Guillaume');
let alex = welcomeMessage('Alex');
let fred = welcomeMessage('Fred');

// Testing the functions
guillaume();
alex();
fred();