import StringUtil from "./string.util";

describe("StringUtil.format", () => {
  it("debe reemplazar correctamente los placeholders con valores dados", () => {
    const result = StringUtil.format("Hola, {0} {1}!", "Juan", "Pérez");
    expect(result).toBe("Hola, Juan Pérez!");
  });

  it("debe dejar los placeholders sin reemplazar si no se proporcionan valores", () => {
    const result = StringUtil.format("Hola, {0} {1}!");
    expect(result).toBe("Hola, {0} {1}!");
  });

  it("debe reemplazar solo los placeholders existentes", () => {
    const result = StringUtil.format("Hola, {0}! {1} {2}.", "Mundo");
    expect(result).toBe("Hola, Mundo! {1} {2}.");
  });

  it("debe soportar placeholders fuera de orden", () => {
    const result = StringUtil.format("Valores: {2}, {0}, {1}.", "uno", "dos", "tres");
    expect(result).toBe("Valores: tres, uno, dos.");
  });

  it("debe soportar valores numéricos", () => {
    const result = StringUtil.format("El resultado es: {0}.", 42);
    expect(result).toBe("El resultado es: 42.");
  });

  it("debe manejar múltiples ocurrencias del mismo placeholder", () => {
    const result = StringUtil.format("{0} y {0} y {0}", "repetido");
    expect(result).toBe("repetido y repetido y repetido");
  });

  it("debe manejar plantillas vacías", () => {
    const result = StringUtil.format("", "valor");
    expect(result).toBe("");
  });

  it("debe manejar valores no definidos correctamente", () => {
    const result = StringUtil.format("Hola, {0}, {1}!", "Juan");
    expect(result).toBe("Hola, Juan, {1}!");
  });
});
