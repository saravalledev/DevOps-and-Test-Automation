function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "pair";
    } else {
        return "odd";
    }
}

module.exports = checkEvenOrOdd;