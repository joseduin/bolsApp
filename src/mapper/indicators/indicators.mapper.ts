import {IFinancialIndicators, IIndicator} from '../../type/indicators/indicators.type';
import {ResponseItem} from '../../type/response/response.type';

export default class IndicatorMap {
  static parse(response: ResponseItem[]): IIndicator[] {
    return response.map(item => ({
      value: item.Valor,
      date: item.Fecha,
    }));
  }

  static onlyRequired(data: IFinancialIndicators): IFinancialIndicators {
    return {
      slug: data.slug,
      name: data.name,
      symbol: data.symbol,
      currency: data.currency,
      request: {
        searchIndicator: data.request.searchIndicator,
        searchGraph: data.request.searchGraph,
      },
      response: {
        key: data.response.key,
      },
    };
  }
}
