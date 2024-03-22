function filterWords(words) {
    // Your code here
    const filteredWords = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 3) {
            filteredWords.push(words[i]);
        }
    }
    return filteredWords;
}

module.exports = filterWords;
