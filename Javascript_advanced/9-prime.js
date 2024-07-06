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

// Measure execution time
let startTime = performance.now();
let primeCount = countPrimeNumbers();
let endTime = performance.now();
let executionTime = endTime - startTime;

console.log(`Number of prime numbers between 2 and 100: ${primeCount}`);
console.log(`Execution time of counting prime numbers was ${executionTime} milliseconds.`);