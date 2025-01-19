import {StyleSheet} from 'react-native';
import {GlobalStyle} from '../../style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    paddingTop: GlobalStyle.wrapper.paddingTop,
    paddingHorizontal: GlobalStyle.wrapper.paddingHorizontal,
  },
  body: {
    gap: 10,
    paddingBottom: GlobalStyle.wrapper.paddingBottom,
  }
});
