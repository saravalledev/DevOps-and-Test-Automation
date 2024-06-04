const numberPositiveNegativeZero = require('../functions/function-3');

describe('Função numberPositiveNegativeZero', () => {
  it('deve retornar quando o número é positive', () => {
    expect(numberPositiveNegativeZero(2)).toBe('positive');
  });

  it('deve retornar quando o número é negative', () => {
    expect(numberPositiveNegativeZero(-3)).toBe('negative');
  });

  it('deve retornar quando o número é zero', () => {
    expect(numberPositiveNegativeZero(0)).toBe('zero');
  });
});