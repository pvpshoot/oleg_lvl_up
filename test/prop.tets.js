import prop from "prop";

describe("prop должен брать значение объекта по ключу", () => {
  test("prop достает простой ключ из объекта", () => {
    const obj = {name: 'Oleg'} 
    expect(prop('name', obj)).toBe('Oleg');
  });
});
