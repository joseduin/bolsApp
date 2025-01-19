import React from 'react';
import {Text, TextProps} from 'react-native-paper';
import {TextStyle} from 'react-native';
import useCurrency from '../../hook/currency/useCurrency.hook';

interface DateHumanizeProps extends Partial<TextProps<any>> {
  value: string;
  style?: TextStyle;
  symbol?: string;
}
export default function Currency({value, style, variant, symbol = "$"}: DateHumanizeProps) {
  const formater = useCurrency(value, symbol);
  return <Text variant={variant} style={style}>{formater}</Text>;
}
