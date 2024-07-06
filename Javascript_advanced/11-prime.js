function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}

function measureExecutionTime() {
    let startTime = performance.now();
    let counter = 0;

    function delayedExecution() {
        countPrimeNumbers();
        counter++;
        if (counter < 100) {
            setTimeout(delayedExecution, 0);
        } else {
            let endTime = performance.now();
            let executionTime = endTime - startTime;
            console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`);
        }
    }

    // Start the first delayed execution
    setTimeout(delayedExecution, 0);
}

// Measure execution time
measureExecutionTime();