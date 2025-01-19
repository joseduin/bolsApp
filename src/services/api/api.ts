import HTTP from '../http/http.service';
import {IIndicatorSlug} from '../../type';
import {Dates, StringUtil} from '../../util';

export default class API {
  static async historyOfLasDays<T extends any>(indicator: IIndicatorSlug, days: number) {
    const paramsDate = Dates.daysInPass(days, 'YYYY/MM/{0}/DD');
    const searchParams = StringUtil.format(paramsDate, 'dias');
    return HTTP.get<T>(`/${indicator}/posteriores/${searchParams}`);
  }
  static async historyOfLasMonths<T extends any>(indicator: IIndicatorSlug, months: number) {
    const paramsDate = Dates.monthsInPass(months, 'YYYY/MM');
    return HTTP.get<T>(`/${indicator}/posteriores/${paramsDate}`);
  }
  static async thisYearsHistory<T extends any>(indicator: IIndicatorSlug) {
    const paramsDate = Dates.today('YYYY');
    return HTTP.get<T>(`/${indicator}/${paramsDate}`);
  }
  static async currentHistorical<T extends any>(indicator: IIndicatorSlug) {
    return HTTP.get<T>(`/${indicator}`);
  }
}
