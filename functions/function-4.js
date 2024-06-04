function calculateCube(number) {
    return Math.pow(number, 3);
}

const number = 5;
const cube = calculateCube(number);
console.log(`O cubo do numero ${number} é ${cube}`);

module.exports = calculateCube;