const calculateFactory = require('../functions/function-8');

describe('Teste de chamada da função calculateFactory', () => {

    test('deve retornar o fatorial do número', () => {
        const number = 5;
        const factory = calculateFactory(number);
        expect(factory).toBe(120);
    });
});