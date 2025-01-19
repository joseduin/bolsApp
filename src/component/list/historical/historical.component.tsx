import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';
import {useAppSelector} from '../../../hook/state/useState.hook';
import {
  getErrorIndicators,
  getIndicatorValues,
} from '../../../state/indicator/indicator.slice';
import {IIndicator} from '../../../type';
import DateHumanize from '../../text/dateHumanize.component';
import CardSlyle from '../../card/default/card.component';
import {GlobalStyle} from '../../../style';
import Variation from '../../text/variation.component';

const Historical: React.FC = () => {
  const [indicators, setIndicators] = useState<IIndicator[]>([]);
  const indicatorValues = useAppSelector(getIndicatorValues);
  const error = useAppSelector(getErrorIndicators);

  useEffect(() => {
    let list: IIndicator[] = [];
    if (indicatorValues) list = [...indicatorValues].reverse();
    setIndicators(list);
  }, [indicatorValues]);

  if (error) return <Text>{error}</Text>;

  if (indicators.length === 0)
    return <ActivityIndicator animating={true} size="large" />;

  return (
    <>
      {indicators.map((indicator, index) => (
        <CardSlyle key={indicator.date} contentStyle={{paddingVertical: 6}}>
          <View style={GlobalStyle.rowSpaceBetween}>
            <DateHumanize variant="titleMedium" date={indicator.date} />

            <Variation
              current={indicator.value}
              next={indicators[index + 1]?.value || '-1'}
            />
          </View>
        </CardSlyle>
      ))}
    </>
  );
};

export default Historical;
