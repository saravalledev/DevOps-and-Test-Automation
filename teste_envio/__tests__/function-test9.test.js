const isPrime = require('../functions/function-9');

describe('Teste de chamada da função isPrime', () => {

    test('deve retornar se o número é primo', () => {
        const number = 17;
        const prime = isPrime(number);
        expect(prime).toBe(true);
    });
});