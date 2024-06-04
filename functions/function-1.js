function countLetter(phrase, letter) {
    let count = 0;
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

module.exports = countLetter;