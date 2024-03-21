function sumOfSquares(num1, num2) {
    // Your code here
    let sum = 0;

    sum += Math.pow(num1, 2);
    sum += Math.pow(num2, 2);

    return sum;
}

module.exports = sumOfSquares;
