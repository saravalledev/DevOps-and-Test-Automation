const countLetter = require('../functions/function-1');

describe('Função countLetter', () => {
  it('deve retornar 0 quando a phrase está vazia', () => {
    expect(countLetter('', 'a')).toBe(0);
  });

  it('deve retornar 1 quando a phrase contém apenas uma letter igual à letter especificada', () => {
    expect(countLetter('a', 'a')).toBe(1);
  });

  it('deve retornar o número correto de letters iguais à letter especificada', () => {
    expect(countLetter('hello world', 'l')).toBe(3);
  });

  it('deve retornar 0 quando a letter especificada não existe na phrase', () => {
    expect(countLetter('hello', 'z')).toBe(0);
  });
});
