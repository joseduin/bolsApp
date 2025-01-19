import moment from "moment";
import Dates from "./date.util";

describe("Dates", () => {
  describe("today", () => {
    it("debe devolver la fecha de hoy en el formato especificado", () => {
      const format = "YYYY-MM-DD";
      const result = Dates.today(format);
      const expected = moment().format(format);
      expect(result).toBe(expected);
    });
  });

  describe("daysInPass", () => {
    it("debe devolver la fecha de días pasados en el formato especificado", () => {
      const days = 10;
      const format = "YYYY-MM-DD";
      const result = Dates.daysInPass(days, format);
      const expected = moment().subtract(days, "days").format(format);
      expect(result).toBe(expected);
    });
  });

  describe("monthsInPass", () => {
    it("debe devolver la fecha de meses pasados en el formato especificado", () => {
      const months = 3;
      const format = "YYYY-MM-DD";
      const result = Dates.monthsInPass(months, format);
      const expected = moment().subtract(months, "months").format(format);
      expect(result).toBe(expected);
    });
  });

  describe("humanize", () => {
    it("debe devolver la fecha en formato humanizado", () => {
      const date = "2025-01-01";
      const result = Dates.humanize(date);
      const expected = moment(date).format("MMM DD, YYYY");
      expect(result).toBe(expected);
    });
  });

  describe("format", () => {
    it("debe devolver la fecha en el formato especificado", () => {
      const date = "2025-01-01";
      const format = "DD/MM/YYYY";
      const result = Dates.format(date, format);
      const expected = moment(date).format(format);
      expect(result).toBe(expected);
    });
  });
});
