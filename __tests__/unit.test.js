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

test("The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used", () => {
  expect(isStrongPassword('hello_world')).toBe(true);
});
test("The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used", () => {
  expect(isStrongPassword('abcdef789')).toBe(true);
});
test("The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used", () => {
  expect(isStrongPassword('~123456789123456789')).toBe(false);
});
test("The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used", () => {
  expect(isStrongPassword('')).toBe(false);
});

test("This regular expressions matches dates of the form XX / XX / YYYY where XX can be 1 or 2 digits long and YYYY is always 4 digits long.", () => {
  expect(isDate('3/14/2015')).toBe(true);
});
test("This regular expressions matches dates of the form XX / XX / YYYY where XX can be 1 or 2 digits long and YYYY is always 4 digits long.", () => {
  expect(isDate('10/7/2024')).toBe(true);
});
test("This regular expressions matches dates of the form XX / XX / YYYY where XX can be 1 or 2 digits long and YYYY is always 4 digits long.", () => {
  expect(isDate('5/7/4')).toBe(false);
});
test("This regular expressions matches dates of the form XX / XX / YYYY where XX can be 1 or 2 digits long and YYYY is always 4 digits long.", () => {
  expect(isDate('6789/0/2000')).toBe(false);
});

test("Matches valid 3 or 6 character hex codes used for HTML or CSS.", () => {
  expect(isHexColor('#fff')).toBe(true);
});
test("Matches valid 3 or 6 character hex codes used for HTML or CSS.", () => {
  expect(isHexColor('#000000')).toBe(true);
});
test("Matches valid 3 or 6 character hex codes used for HTML or CSS.", () => {
  expect(isHexColor('#fffffff')).toBe(false);
});
test("Matches valid 3 or 6 character hex codes used for HTML or CSS.", () => {
  expect(isHexColor('#0')).toBe(false);
});