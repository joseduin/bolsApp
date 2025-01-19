import axios from 'axios';
import { BASE_URL, API_KEY } from '@env';

export default class HTTP {
  private static get CLIENT() {
    return axios.create({
      baseURL: BASE_URL,
      params: {
        apikey: API_KEY,
        formato: 'json',
      },
    });
  }

  static get OK() {
    return 200;
  }
  static async get<T extends any>(url: string) {
    return HTTP.CLIENT.get<T>(url);
  }
}
