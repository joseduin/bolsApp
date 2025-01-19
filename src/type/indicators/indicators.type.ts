import {IResponseKey} from '../response/response.type';

export type IIndicatorSlug = 'dolar' | 'euro' | 'ipc' | 'uf' | 'utm';
export interface IIndicator {
  value: string;
  date: string;
}

export interface IFinancialIndicators {
  name: string;
  slug: IIndicatorSlug;
  symbol: string;
  currency: string;

  currentValue?: IIndicator;
  graphicData?: IIndicator[];
  indicators?: IIndicator[];

  response: {
    key: IResponseKey;
  };
  request: {
    searchIndicator: string;
    searchGraph: string;
  };
}