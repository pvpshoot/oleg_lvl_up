import equals from "equals";

describe("equals сравнивает 2 аргумента", () => {
  test("две одинаковые строки", () => {
    expect(equals("Олег где макет", "Олег где макет")).toBeTruthy();
  });
});
