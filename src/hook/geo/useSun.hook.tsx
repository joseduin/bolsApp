import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useMemo} from 'react';
import {GeoCoordinates} from 'react-native-geolocation-service';
import {useTheme} from 'react-native-paper';
import SunCalc from 'suncalc';

const useSunMoonIcon = (geo: GeoCoordinates) => {
  const {colors} = useTheme();

  const iconSumMoon = useMemo(() => {
    const {latitude, longitude} = geo;
    if (latitude === -1 && longitude === -1) return <></>;

    const now = new Date();
    const {sunrise, sunset} = SunCalc.getTimes(now, latitude, longitude);
    const icon = now > sunrise && now < sunset ? 'sun' : 'moon';

    return (
      <FontAwesomeIcon icon={icon} size={20} color={colors.tertiary} />
    );
  }, [geo]);

  return iconSumMoon;
};

export default useSunMoonIcon;
