const checkEvenOrOdd = require('../functions/function-2');

describe('Função checkEvenOrOdd', () => {
  it('deve retornar "pair" quando o número é pair', () => {
    expect(checkEvenOrOdd(2)).toBe('pair');
  });

  it('deve retornar "odd" quando o número é odd', () => {
    expect(checkEvenOrOdd(3)).toBe('odd');
  });
});