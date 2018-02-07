import add from "add";

describe("add должен складывать 2 числа", () => {
  test("сложение 2х чисел", () => {
    expect(add(1, 2)).toBe(3);
  });
});
