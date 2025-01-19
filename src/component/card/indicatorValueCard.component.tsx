import React, {View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {useAppSelector} from '../../hook/state/useState.hook';
import {getIndicatorCurrent} from '../../state/indicator/indicator.slice';
import {IFinancialIndicators, IIndicator} from '../../type';
import {useEffect, useState} from 'react';
import DateHumanize from '../text/dateHumanize.component';
import {GlobalStyle} from '../../style';
import Currency from '../text/currency.component ';
import {CardSlyle, Variation} from '..';

interface State {
  indicators: IIndicator[];
  date: string;
}
interface Props {
  indicator: IFinancialIndicators;
}
export default function IndicatorValueCard({indicator}: Props) {
  const [state, setState] = useState<State>({date: '', indicators: []});
  const currentValue = useAppSelector(getIndicatorCurrent);

  useEffect(() => {
    if (currentValue && currentValue.length) {
      setState({date: currentValue[0].date, indicators: currentValue});
    }
  }, [currentValue]);

  return (
    <CardSlyle contentStyle={{paddingVertical: 8}}>
      <Text variant="titleLarge">{indicator.name}</Text>
      <View style={GlobalStyle.rowSpaceBetween}>
        <Text>{'Fecha:'}</Text>
        <DateHumanize date={state.date} />
      </View>
      <View style={GlobalStyle.rowSpaceBetween}>
        <Text>{'Valor:'}</Text>
        <Currency
          value={state.indicators[0]?.value || ''}
          symbol={indicator.currency}
        />
      </View>
      <View style={GlobalStyle.rowSpaceBetween}>
        <Text>{'Rentabilidad:'}</Text>
        <Variation
          current={state.indicators[0]?.value || '-1'}
          next={state.indicators[1]?.value || '-1'}
          displayCurrency={false}
          profitabilityVariant="labelMedium"
        />
      </View>
    </CardSlyle>
  );
}
