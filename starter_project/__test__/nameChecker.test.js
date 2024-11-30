import { checkForName } from '../src/client/js/nameChecker'; // Adjust the path as necessary

describe('checkForName', () => {
  it('should return true for a valid URL', () => {
    const validUrl = 'https://www.example.com';
    expect(checkForName(validUrl)).toBe(true);
  });

  it('should return false for an invalid URL', () => {
    const invalidUrl = 'invalid-url';
    expect(checkForName(invalidUrl)).toBe(false);
  });
});