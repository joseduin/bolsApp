import { IIndicatorSlug } from "../indicators/indicators.type";

export type IResponseKey = 'Dolares' | 'Euros' | 'IPCs' | 'UFs' | 'UTMs';

export type IResponse<K extends IResponseKey> = {
  [key in K]: ResponseItem[];
};

export interface IResponseGraph {
  key: IIndicatorSlug;
  data: ResponseItem[];
}
export interface ResponseItem {
  Valor: string;
  Fecha: string;
}