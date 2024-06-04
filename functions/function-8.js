function calculateFactory(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * calculateFactory(number - 1);
    }
}

const number = 5;
const factory = calculateFactory(number);
console.log(`O fatorial de ${number} é ${factory}.`);

module.exports = calculateFactory;