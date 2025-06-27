const caesar = require("../modules/caesar");
test("Shift letters", () => {
  expect(caesar("abc", 1)).toBe("bcd");
  expect(caesar("HeLLo", 3)).toBe("KhOOr");
  expect(caesar("xyz", 3)).toBe("abc");
  expect(caesar("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
