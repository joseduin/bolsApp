import {StyleSheet} from 'react-native';

const GlobalStyle = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  flex1: {
    flex: 1,
  },

  row: {
    flexDirection: 'row',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },

  column: {
    flexDirection: 'column',
  },
});

export default GlobalStyle;
