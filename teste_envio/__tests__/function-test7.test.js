const reverseNumber = require('../functions/function-7');

describe('Teste de chamada da função reverseNumber', () => {

    test('deve retornar o número invertido', () => {
        const number = 12345;
        const reversed = reverseNumber(number);
        expect(reversed).toBe(54321);
    });
});