import moment from 'moment';

export default class Dates {
  static today(format: string) {
    return moment().format(format);
  }
  static daysInPass(days: number, format: string) {
    return moment().subtract(days, 'days').format(format);
  }
  static monthsInPass(months: number, format: string) {
    return moment().subtract(months, 'months').format(format);
  }
  static humanize(date: string) {
    return moment(date).format("MMM DD, YYYY");
  }
  static format(date: string, format: string) {
    return moment(date).format(format);
  }
}
