const calculator = require("../modules/calculator");

const add = calculator().add;
const subtract = calculator().subtract;
const multiply = calculator().multiply;
const divide = calculator().divide;

test("add", () => {
  expect(add(1, 1)).toBe(2);
  expect(add("1", "1")).toBe(2);
  expect(() => add("test", 1)).toThrow("Cannot add non numbers");
});

test("subtract", () => {
  expect(subtract(1, 1)).toBe(0);
  expect(subtract("1", "1")).toBe(0);
  expect(() => subtract("test", 1)).toThrow("Cannot subtract non numbers");
});

test("multiply", () => {
  expect(multiply(1, 0)).toBe(0);
  expect(multiply(2, 2)).toBe(4);

  expect(multiply("1", "0")).toBe(0);
  expect(multiply("2", "2")).toBe(4);

  expect(() => multiply("test", 1)).toThrow("Cannot multiply non numbers");
});

test("divide", () => {
  expect(divide(2, 2)).toBe(1);
  expect(divide("2", "2")).toBe(1);

  expect(() => divide("test", 1)).toThrow("Cannot divide non numbers");
  expect(() => divide(1, 0)).toThrow("Cannot divide by zero");
});
