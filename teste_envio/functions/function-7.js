function reverseNumber(number) {
    const reversedNumber = parseInt(number.toString().split('').reverse().join(''));
    return reversedNumber;
}

const number = 12345;
const reversed = reverseNumber(number);
console.log(`O numero invertido fica ${reversed}`);

module.exports = reverseNumber;