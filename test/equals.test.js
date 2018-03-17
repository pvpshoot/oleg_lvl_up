import equals from "equals";

describe("equals сравнивает 2 аргумента", () => {
  test("две одинаковые строки", () => {
    expect(equals("Олег где макет", "Олег где макет")).toBeTruthy();
  });

  test("два одинаковых массива", () => {
    expect(equals([], [])).toBeTruthy();
    expect(equals([1, 2, 3], [1, 2, 3])).toBeTruthy();
    expect(equals([1, 2, 3], [3, 2, 1])).toBeFalsy();
    expect(equals([1, 2, 3], [1, 2, '3'])).toBeFalsy();
  });

  test('массив и строка разные', () => {
    expect(equals([], '')).toBeFalsy();
  });
});
