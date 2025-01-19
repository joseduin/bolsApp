export default class NumberUtil {
  static toNumber(value: string) {
    const number = value.replace(/\./g, "").replace(',', '.');
    return Number(number);
  }
  
  static format(label: number) {
    return new Intl.NumberFormat('es-cl').format(label);
  }
}
