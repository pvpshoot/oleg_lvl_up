import ap from "ap";

describe("ap должен вызывать переданную функцию с аргументом", () => {
  test("функция добавляет 10 к числу 5", () => {
    const add10 = n => n + 10;
    expect(ap(add10, 5)).toBe(15);
  });
});
