import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {RequestStatus, RootState} from '../../type';
import {GeoCoordinates} from 'react-native-geolocation-service';
import {GPSRequest} from './geoposition.thunk';

type IState = {
  userPosition: GeoCoordinates;
  error: string | undefined;
  status: RequestStatus;
};

const initialState: IState = {
  userPosition: {
    latitude: -1,
    longitude: -1,
    accuracy: 0,
    altitude: 0,
    heading: 0,
    speed: 0,
  },
  error: undefined,
  status: RequestStatus.IDLE,
};

const geoSlice = createSlice({
  name: 'geo',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {
    builder.addCase(GPSRequest.pending, nextState => {
      nextState.error = undefined;
      nextState.status = RequestStatus.PENDING;
    });
    builder.addCase(GPSRequest.fulfilled, (nextState, action: PayloadAction<GeoCoordinates>) => {
    nextState.userPosition = action.payload;
    nextState.status = RequestStatus.SUCCESSFULL;
    });
    builder.addCase(GPSRequest.rejected, (nextState, action: PayloadAction<any>) => {
      nextState.error = action.payload.data;
      nextState.status = RequestStatus.FAILED;
    });
  },
});

export const getPosition = (state: RootState) => state.geo.userPosition;
export const getLoading = (state: RootState) => state.geo.status === RequestStatus.PENDING;
export const getError = (state: RootState) => state.geo.error;

export default geoSlice.reducer;
