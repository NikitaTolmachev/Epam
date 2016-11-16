// Number: Task 1;
function isNumber(num) {

    return (isFinite(num));
}

console.log(isNumber(2));
console.log(isNumber("JavaScript"));

// Number: Task 2;
function isNegative(num) {
    var num;
    if (isNumber(num)) {
        if (num < 0) {
            return false;
        }
        else {
            return true;
        }
    } else {
        throw new Error("Не число")
    }
}

console.log(isNegative(2));
console.log(isNegative(-2));

// Number: Task 3;
function isPositive(num) {
    var num;
    if (isNumber(num)) {
        if (num > 0) {
            return true;
        }
        else {
            return false;
        }
    } else {
        throw new Error("Не число")
    }
}

console.log(isPositive(2)); // true
console.log(isPositive(-2)); // false

// Number: Task 4;
function factorial(num) {
    if (isNumber(num)) {
        result = 1;
        for (var i = 1; i <= num; i++) {
            result = result * i;
        }
        return result;
    }
    else {
        throw new Error("NaN");
    }
}
console.log(factorial(5));
// Number: Task 5;
function isPrime(num) {
    if (isNumber(num)) {
        var positiveDivisor = 0;
        for (var i = 1; i <= num; i++) {
            if (num % i == 0) {
                positiveDivisor++;
            }
        }
        return (positiveDivisor == 2) 
}
    else {
        throw new Error("NaN")
    }
}

console.log(isPrime(2));
console.log(isPrime(191));
console.log(isPrime("Not a number"));

