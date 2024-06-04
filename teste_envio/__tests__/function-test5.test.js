const fahrenheitToCelsius = require('../functions/function-5');

describe('Função fahrenheitToCelsius', () => {
  it('deve retornar a conversão de Fahrenheit para Celsius', () => {
    expect(fahrenheitToCelsius(75)).toBe(23.88888888888889);
    expect(fahrenheitToCelsius(32)).toBe(0);
    expect(fahrenheitToCelsius(100)).toBe(37.77777777777778);
  });
});