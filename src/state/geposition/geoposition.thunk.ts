import {createAsyncThunk} from '@reduxjs/toolkit';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {AxiosError} from 'axios';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';
import {Platform} from 'react-native';

const requestBy = Platform.select({
  android: async () => {
    try {
      const checked = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      if (checked === RESULTS.GRANTED) return true;

      const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      return result === RESULTS.GRANTED;
    } catch (e) {
      return false;
    }
  },
  ios: () => Promise.resolve(true),
  default: () => Promise.resolve(true),
});

const getGeo = (): Promise<GeoPosition> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject(error),
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  });
};

export const GPSRequest = createAsyncThunk(
  'GPSRequest',
  async (_, thunkAPI) => {
    try {
      const isGranted = await requestBy();
      if (!isGranted)
        return thunkAPI.rejectWithValue(
          new AxiosError('Request error: Permission not granted'),
        );

      const position = await getGeo();
      return position.coords;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);
