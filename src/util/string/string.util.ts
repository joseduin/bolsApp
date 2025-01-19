export default class StringUtil {
  static format(template: string, ...values: (string | number)[]): string {
    return template.replace(/{(\d+)}/g, (match, index) => {
      const value = values[parseInt(index, 10)];
      return value !== undefined ? String(value) : match;
    });
  }
}
