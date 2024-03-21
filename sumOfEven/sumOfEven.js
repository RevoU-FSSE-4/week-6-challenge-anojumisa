function sumOfEvens(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (isEven(numbers[i])) {
            sum += numbers[i];
        }
    }
    return sum;
}
function isEven(number) {
    return number % 2 === 0;
}

module.exports = sumOfEvens;
