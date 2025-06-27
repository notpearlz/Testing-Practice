const reverse = require("../modules/reverse");

test("Reverse String", () => {
  expect(reverse("string")).toBe("gnirts");
  expect(reverse("tacocat")).toBe("tacocat");
  expect(reverse("Hello")).toBe("olleH");
  expect(reverse("Racecar")).toBe("racecaR");
});
