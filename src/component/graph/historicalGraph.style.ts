import {StyleSheet, Dimensions} from 'react-native';
import {GlobalStyle} from '../../style';

const {width} = Dimensions.get('window');
const paddingWrapper = GlobalStyle.wrapper.paddingHorizontal * 2;
const screenWidth = width - paddingWrapper;

export const styles = StyleSheet.create({
  wrap: {
    width: screenWidth,
    height: screenWidth,
    paddingVertical: 8,
  },
});
