const calculateCube = require('../functions/function-4');

describe('Função calculateCube', () => {
  it('deve retornar o cubo de um número', () => {
    expect(calculateCube(3)).toBe(27);
    expect(calculateCube(5)).toBe(125);
    expect(calculateCube(10)).toBe(1000);
  });
});