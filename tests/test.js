const fb = require('../fizz-buzz-test/fizzbuzz');
// challenge 1
test('constantTest', () => {
  expect(fb.FIZZ).toBe('fizz');
  expect(fb.BUZZ).toBe('buzz');
  expect(fb.FIZZBUZZ).toBe('fizzbuzz');
});
// challenge 2
test('isFizzy', () => {
  expect(fb.isFizzy(3)).toBe(true);
  expect(fb.isFizzy(15)).toBe(true);
  expect(fb.isFizzy(8)).toBe(false);
});
// challenge 3
test('isBuzzy', () => {
  expect(fb.isBuzzy(5)).toBe(true);
  expect(fb.isBuzzy(25)).toBe(true);
  expect(fb.isBuzzy(8)).toBe(false);
});
// challenge 4
test('fizzyBuzzy', () => {
  expect(fb.fizzyBuzzy(3)).toBe('fizz');
  expect(fb.fizzyBuzzy(5)).toBe('buzz');
  expect(fb.fizzyBuzzy(15)).toBe('fizzbuzz');
});
// challenge 5
test('fizzbuzzCount', () => {
  expect(fb.fizzBuzz(3)).toEqual({count: 3, fizz: 1, buzz: 0, fizzBuzz: 0});
  expect(fb.fizzBuzz(5)).toEqual({count: 5, fizz: 1, buzz: 1, fizzBuzz: 0});
  expect(fb.fizzBuzz(15)).toEqual({count: 15, fizz: 4, buzz: 2, fizzBuzz: 1});
});