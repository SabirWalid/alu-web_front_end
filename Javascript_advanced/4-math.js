function divideBy(firstNumber) {
    return function(secondNumber) {
        return secondNumber / firstNumber;
    };
}

function addBy(firstNumber) {
    return function(secondNumber) {
        return firstNumber + secondNumber;
    };
}

// Create closures using addBy and divideBy
let addBy100 = addBy(100);
let addBy1000 = addBy(1000);
let divideBy10 = divideBy(10);
let divideBy100 = divideBy(100);

// Testing the closures
console.log(addBy100(20)); // Should display 120
console.log(divideBy10(20)); // Should display 2
console.log(divideBy100(200)); // Should display 2
console.log(addBy1000(20)); // Should display 1020