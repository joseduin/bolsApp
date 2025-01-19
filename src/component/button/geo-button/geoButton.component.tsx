import React from 'react';
import {ActivityIndicator, Button, useTheme} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../hook/state/useState.hook';
import {GPSRequest} from '../../../state/geposition/geoposition.thunk';
import {
  getLoading,
  getPosition,
} from '../../../state/geposition/geoposition.slice';
import {View} from 'react-native';
import {GlobalStyle} from '../../../style';
import useSunMoonIcon from '../../../hook/geo/useSun.hook';

export default function GeoButton() {
  const {colors} = useTheme();
  const loading = useAppSelector(getLoading);
  const geo = useAppSelector(getPosition);
  const dispatch = useAppDispatch();
  const iconSumMoon = useSunMoonIcon(geo);

  function onPress() {
    dispatch(GPSRequest());
  }

  return (
    <View style={[GlobalStyle.row, {alignItems: 'center'}]}>
      {iconSumMoon}
      {loading ? (
        <Button mode="text" disabled>
          <ActivityIndicator animating size="small" />
        </Button>
      ) : (
        <Button mode="text" onPress={onPress}>
          <FontAwesomeIcon
            icon="location-dot"
            size={20}
            color={colors.inverseSurface}
          />
        </Button>
      )}
    </View>
  );
}
