import {IIndicatorSlug} from '../../type';
import API from './api';

export default class APIIndicator {
  private static get METHOD_KEY() {
    return {
      LAST_DAYS: 'last|days',
      LAST_MONTHS: 'last|months',
      CURRENT_YEAR: 'current|year',
      NOW: 'now|undefined',
    };
  }

  private static get HISTORICAL_METHODS() {
    return {
      [APIIndicator.METHOD_KEY.NOW]: API.currentHistorical,
      [APIIndicator.METHOD_KEY.CURRENT_YEAR]: API.thisYearsHistory,
      [APIIndicator.METHOD_KEY.LAST_DAYS]: API.historyOfLasDays,
      [APIIndicator.METHOD_KEY.LAST_MONTHS]: API.historyOfLasMonths,
    };
  }

  static async historicalBy<T extends any>(indicator: IIndicatorSlug, query: string) {
    const [method, unitTime, time] = query.split('|');
    return APIIndicator.HISTORICAL_METHODS[`${method}|${unitTime}`]<T>(indicator, Number(time));
  }
}
