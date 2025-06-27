const analyze = require("../modules/analyze-array");
test("Analyize array", () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(analyze([])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  });
  expect(() => analyze("test")).toThrow("Not an array");
});
