import {StyleSheet, Dimensions} from 'react-native';
import { GlobalStyle } from '../../style';

const {width} = Dimensions.get('window');
const paddingWrapper = GlobalStyle.wrapper.paddingHorizontal * 2;
const indicatorGap = 10;
const screenWidth = width - paddingWrapper - indicatorGap;

export const styles = StyleSheet.create({
  indicatorsWrap: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    gap: indicatorGap,
  },
  indicatorCol: {
    flexDirection: 'column',
    gap: indicatorGap,
  },
  indicatorFullWidth: {
    width: screenWidth + indicatorGap,
    height: screenWidth / 2,
  },
  indicatorHalfWidth: {
    width: screenWidth / 2,
    height: screenWidth / 2,
  },
  indicatorDoubleHeight: {
    width: screenWidth / 2,
    height: screenWidth + indicatorGap,
  },
});
