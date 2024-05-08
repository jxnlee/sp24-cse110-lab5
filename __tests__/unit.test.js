// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('matches valid phone numbers', () => {
  expect(isPhoneNumber('(012)345-6789')).toBe(true);
});
test('matches valid phone numbers', () => {
  expect(isPhoneNumber('(987)654-3210')).toBe(true);
});
test('matches valid phone numbers', () => {
  expect(isPhoneNumber('0123456789')).toBe(false);
});
test('matches valid phone numbers', () => {
  expect(isPhoneNumber('9876543210')).toBe(false);
});


test('matches valid emails', () => {
  expect(isEmail('123@gmail.com')).toBe(true);
});
test('matches valid emails', () => {
  expect(isEmail('abc@ucsd.edu')).toBe(true);
});
test('matches valid emails', () => {
  expect(isEmail('@gmail')).toBe(false);
});
test('matches valid emails', () => {
  expect(isEmail('ucsd.edu')).toBe(false);
});

test('matches valid emails', () => {
  expect(isEmail('123@gmail.com')).toBe(true);
});
test('matches valid emails', () => {
  expect(isEmail('abc@ucsd.edu')).toBe(true);
});
test('matches valid emails', () => {
  expect(isEmail('@gmail')).toBe(false);
});
test('matches valid emails', () => {
  expect(isEmail('ucsd.edu')).toBe(false);
});