import {createAsyncThunk} from '@reduxjs/toolkit';
import {IFinancialIndicators, IResponse} from '../../type';
import {APIIndicator, HTTP} from '../../services';
import {AxiosError} from 'axios';

export const fetchIndicators = createAsyncThunk(
  'fetchIndicators',
  async (indicator: IFinancialIndicators, thunkAPI) => {
    try {
      const {
        slug,
        request: {searchIndicator},
        response: {key},
      } = indicator;
      const response = await APIIndicator.historicalBy<IResponse<typeof key>>(slug, searchIndicator);
      if (response.status !== HTTP.OK) {
        return thunkAPI.rejectWithValue(new AxiosError(`Request error: ${response.status} code`));
      }
      return response.data[key];
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const fetchGraph = createAsyncThunk(
  'fetchGraph',
  async (indicator: IFinancialIndicators, thunkAPI) => {
    try {
      const {
        slug,
        request: {searchGraph},
        response: {key},
      } = indicator;
      const response = await APIIndicator.historicalBy<IResponse<typeof key>>(slug, searchGraph);
      if (response.status !== HTTP.OK) {
        return thunkAPI.rejectWithValue(new AxiosError(`Request error: ${response.status} code`));
      }
      return {
        key: slug,
        data: response.data[key]
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);
