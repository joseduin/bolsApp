import React from 'react';
import useHumanizeDate from '../../hook/date/useHumanizeDate.hook';
import {Text, TextProps} from 'react-native-paper';
import {TextStyle} from 'react-native';

interface DateHumanizeProps extends Partial<TextProps<any>> {
  date: string;
  style?: TextStyle;
}
export default function DateHumanize({date, style, variant}: DateHumanizeProps) {
  const formater = useHumanizeDate(date);
  return <Text variant={variant} style={style}>{formater}</Text>;
}
