const calculateCircleArea = require('../functions/function-10');

describe('Teste de chamada da função calculateCircleArea', () => {

    test('deve retornar a área do círculo', () => {
        const ray = 5;
        const areaOfCirculo = calculateCircleArea(ray);
        expect(areaOfCirculo).toBeCloseTo(78.54);
    });
});