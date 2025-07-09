import { isValidEmail, isValidName } from '../utils/validators';

describe('Función isValidEmail', () => {
  test('valida emails correctos', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });

  test('rechaza emails incorrectos', () => {
    expect(isValidEmail('test@com')).toBe(false);
    expect(isValidEmail('')).toBe(false);
  });
});

describe('Función isValidName', () => {
  test('valida nombres no vacíos', () => {
    expect(isValidName('Juan')).toBe(true);
  });

  test('rechaza nombres vacíos', () => {
    expect(isValidName('')).toBe(false);
    expect(isValidName('   ')).toBe(false);
  });
});
