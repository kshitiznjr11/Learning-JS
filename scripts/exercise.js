function isOdd(number) {
    let rem = number % 2;
    let isOdd = rem == 1;
    return isOdd;
}

// console.log(isOdd(4));
// console.log(isOdd(5));
// console.log(isOdd(12));
// console.log(isOdd(999));

function larger(num1, num2) {
    // if (num1 > num2) {
    //     return num1;
    // } else {
    //     return num2;
    // }
    return num1 > num2 ? num1 : num2;
}

// console.log(larger(4,5));
// console.log(larger(145,645))

function toFehrengeit(celsiusValue) {
    return 9/5*celsiusValue + 32;
}

console.log(toFehrengeit(38));
console.log(toFehrengeit(0));
console.log(toFehrengeit(100));

