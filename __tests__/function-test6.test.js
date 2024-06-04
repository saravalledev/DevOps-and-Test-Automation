const calcularAreaTriangulo = require('../functions/function-6');

describe('Teste de chamada da função calcularAreaTriangulo', () => {

    test('deve retornar a área do triangulo baseado nos valores de base e altura', () => {
        const base = 5;
        const altura = 8;
        const area = calcularAreaTriangulo(base, altura);
        expect(area).toBe(20);
    });
});
