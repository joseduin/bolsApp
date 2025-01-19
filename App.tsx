// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/state/store';
import MainNavigation from './src/navigation/navigation';
import {PaperProvider} from 'react-native-paper';
import {registerIcons, Theme} from './src/style/theme/theme';

registerIcons();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = Theme(isDarkMode);

  return (
    <SafeAreaView style={[{flex: 1, backgroundColor: theme.colors.surface}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.surface}
      />
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <MainNavigation />
        </PaperProvider>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
