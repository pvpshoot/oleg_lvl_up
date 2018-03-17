import equals from "equals";

describe("equals сравнивает 2 аргумента", () => {
  test("две одинаковые строки", () => {
    expect(equals("Олег где макет", "Олег где макет")).toBeTruthy();
  });

  test("два одинаковых числа", () => {
    expect(equals({}, {})).toBeTruthy();
    expect(equals({ a: 1 }, { a: 1 })).toBeTruthy();
    expect(equals({ a: 1 }, { a: 2 })).toBeFalsy();
    expect(equals({}, '1')).toBeFalsy();
  });

  test("два одинаковых числа", () => {
    expect(equals(1, 1)).toBeTruthy();
    expect(equals(1, '1')).toBeFalsy();
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
