import React from 'react';
import {ScrollView, View, ViewStyle} from 'react-native';
import {styles} from './main.style';
import {useTheme} from 'react-native-paper';

interface Props {
  children: React.ReactNode;
  header?: React.ReactNode;
  style?: ViewStyle;
}
export default function MainWrapper({children, header, style}: Props) {
  const theme = useTheme();
  const styleWrap = [
    styles.container,
    {backgroundColor: theme.colors.surface},
    style,
  ];

  return (
    <View style={styleWrap}>
      {header}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scroll}>
        <View style={styles.body}>{children}</View>
      </ScrollView>
    </View>
  );
}
