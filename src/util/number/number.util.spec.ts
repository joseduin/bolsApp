import NumberUtil from "./number.util";

describe("NumberUtil.toNumber", () => {
  it("debe convertir un string con comas y puntos correctamente a un número", () => {
    const result = NumberUtil.toNumber("1.234,56");
    expect(result).toBe(1234.56);
  });

  it("debe convertir un string sin separadores a un número", () => {
    const result = NumberUtil.toNumber("123456");
    expect(result).toBe(123456);
  });

  it("debe devolver NaN si el valor no es un número válido", () => {
    const result = NumberUtil.toNumber("abc");
    expect(result).toBeNaN();
  });

  it("debe manejar strings vacíos devolviendo 0", () => {
    const result = NumberUtil.toNumber("");
    expect(result).toBe(0);
  });
});

describe("NumberUtil.format", () => {
  it("debe formatear un número con separadores de miles", () => {
    const result = NumberUtil.format(1234567.89);
    expect(result).toBe("1.234.567,89");
  });

  it("debe formatear un número entero correctamente", () => {
    const result = NumberUtil.format(1000000);
    expect(result).toBe("1.000.000");
  });

  it("debe manejar el número 0 correctamente", () => {
    const result = NumberUtil.format(0);
    expect(result).toBe("0");
  });

  it("debe manejar números negativos correctamente", () => {
    const result = NumberUtil.format(-1234.56);
    expect(result).toBe("-1.234,56");
  });

  it("debe manejar números grandes correctamente", () => {
    const result = NumberUtil.format(9876543210.12);
    expect(result).toBe("9.876.543.210,12");
  });
});
