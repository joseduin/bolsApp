import {library} from '@fortawesome/fontawesome-svg-core';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons/faCircleInfo';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons/faCaretDown';
import {faCaretUp} from '@fortawesome/free-solid-svg-icons/faCaretUp';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons/faLocationDot';
import {faSun} from '@fortawesome/free-solid-svg-icons/faSun';
import {faMoon} from '@fortawesome/free-solid-svg-icons/faMoon';
import {MD3DarkTheme, MD3LightTheme} from 'react-native-paper';
import { Color } from '../color/theme.color';

export const registerIcons = () => {
  library.add(
    faChevronLeft,
    faCircleInfo,
    faCaretDown,
    faCaretUp,
    faLocationDot,
    faSun,
    faMoon,
  );
};

export const Theme = (isDarkMode: boolean) => {
  return isDarkMode
    ? {
        ...MD3DarkTheme,
        roundness: 10,
        colors: {
          ...MD3DarkTheme.colors,
          card: Color.Dark.cardBackground,
        },
      }
    : {
        ...MD3LightTheme,
        roundness: 10,
        colors: {
          ...MD3LightTheme.colors,
          card: Color.Light.cardBackground,
        },
      };
};
