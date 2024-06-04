function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

const base = 5;
const altura = 8;
const area = calcularAreaTriangulo(base, altura);

console.log("A área do triângulo é: " + area);

module.exports = calcularAreaTriangulo;