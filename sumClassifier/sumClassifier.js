function sumClassifier(numbers) {
    // Your code here
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    if (sum > 10) {
        return "Large Sum";
    } else if (sum === 10) {
        return "Equal Sum";
    } else {
        return "Small Sum";
    }
}

module.exports = sumClassifier;
