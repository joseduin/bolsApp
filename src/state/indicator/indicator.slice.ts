import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {
  IFinancialIndicators,
  IIndicatorSlug,
  IResponseGraph,
  RequestStatus,
  ResponseItem,
  RootState,
} from '../../type';
import {fetchGraph, fetchIndicators} from './indicator.thunk';
import {IndicatorMap} from '../../mapper';

type IIndicatorsState = {
  errorIndicators: string | undefined;
  errorGraph: string | undefined;
  status: RequestStatus;
  currentIndicator: IIndicatorSlug;
} & {[Key in IIndicatorSlug]: IFinancialIndicators};

const initialState: IIndicatorsState = {
  dolar: {
    name: 'Dólar',
    slug: 'dolar',
    symbol: '$',
    currency: '$',
    response: {
      key: 'Dolares',
    },
    request: {
      searchIndicator: 'last|days|30',
      searchGraph: 'last|days|10',
    },
  },
  euro: {
    name: 'Euro',
    slug: 'euro',
    symbol: '€',
    currency: '$',
    response: {
      key: 'Euros',
    },
    request: {
      searchIndicator: 'last|days|30',
      searchGraph: 'last|days|10',
    },
  },
  ipc: {
    name: 'IPC',
    slug: 'ipc',
    symbol: '%',
    currency: '%',
    response: {
      key: 'IPCs',
    },
    request: {
      searchIndicator: 'current|year',
      searchGraph: 'last|months|12',
    },
  },
  uf: {
    name: 'UF',
    slug: 'uf',
    symbol: 'UF',
    currency: '$',
    response: {
      key: 'UFs',
    },
    request: {
      searchIndicator: 'last|days|30',
      searchGraph: 'last|days|10',

    },
  },
  utm: {
    name: 'UTM',
    slug: 'utm',
    symbol: 'UTM',
    currency: '$',
    response: {
      key: 'UTMs',
    },
    request: {
      searchIndicator: 'current|year',
      searchGraph: 'last|months|12',
    },
  },
  currentIndicator: 'dolar',
  errorGraph: undefined,
  errorIndicators: undefined,
  status: RequestStatus.IDLE,
};

const indicatorsSlice = createSlice({
  name: 'indicators',
  initialState,
  reducers: {
    setIndicator: (state, action: PayloadAction<IIndicatorSlug>) => {
      state.currentIndicator = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IIndicatorsState>) => {
    // Fetch to search indicator Data
    builder.addCase(fetchIndicators.pending, nextState => {
      nextState.errorIndicators = undefined;
      nextState.status = RequestStatus.PENDING;
    });
    builder.addCase(fetchIndicators.fulfilled, (nextState, action: PayloadAction<ResponseItem[]>) => {
      const indicators = IndicatorMap.parse(action.payload);
      nextState[nextState.currentIndicator].indicators = indicators;
      nextState.status = RequestStatus.SUCCESSFULL;
    });
    builder.addCase(fetchIndicators.rejected, (nextState, action: PayloadAction<any>) => {
      const { payload: {response: {data: { Mensaje }}} } = action;
      nextState.errorIndicators = Mensaje;
      nextState.status = RequestStatus.FAILED;
    });

    // Fetch to search graph Data
    builder.addCase(fetchGraph.pending, nextState => {
      nextState.errorGraph = undefined;
      nextState.status = RequestStatus.PENDING;
    });
    builder.addCase(fetchGraph.fulfilled, (nextState, action: PayloadAction<IResponseGraph>) => {
      const { data, key } = action.payload;
      const indicators = IndicatorMap.parse(data);
      nextState[key].graphicData = indicators;
      nextState.status = RequestStatus.SUCCESSFULL;
    });
    builder.addCase(fetchGraph.rejected, (nextState, action: PayloadAction<any>) => {
      const { payload: {response: {data: { Mensaje }}} } = action;
      nextState.errorGraph = Mensaje;
      nextState.status = RequestStatus.FAILED;
    });
  },
});

export const {setIndicator} = indicatorsSlice.actions;

export const getIndicator = (state: RootState) =>  IndicatorMap.onlyRequired(state.indicators[state.indicators.currentIndicator]);
export const getIndicatorValues = (state: RootState) => state.indicators[state.indicators.currentIndicator].indicators;
export const getInficatorGraph = (state: RootState) => state.indicators[state.indicators.currentIndicator].graphicData;
export const getIndicatorCurrent = (state: RootState) => {
  const [first, second] = (state.indicators[state.indicators.currentIndicator].graphicData || []);
  return [first, second];
};
export const getIndicatorCurrentBy = (state: RootState, slug: IIndicatorSlug) => {
  const [first, second] = (state.indicators[slug].graphicData || []);
  return [first, second];
};
export const getIndicators = (state: RootState) => {
  const {dolar, euro, ipc, uf, utm} = state.indicators;
  return {
    dolar: IndicatorMap.onlyRequired(dolar),
    euro: IndicatorMap.onlyRequired(euro),
    ipc: IndicatorMap.onlyRequired(ipc),
    uf: IndicatorMap.onlyRequired(uf),
    utm: IndicatorMap.onlyRequired(utm),
  };
};
export const getErrorIndicators = (state: RootState) => state.indicators.errorIndicators;
export const getErrorGraph = (state: RootState) => state.indicators.errorGraph;
export const getLoading = (state: RootState) => state.indicators.status === RequestStatus.PENDING;

export default indicatorsSlice.reducer;
