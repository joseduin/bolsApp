import React, {View, ViewStyle} from 'react-native';
import {IFinancialIndicators, IIndicatorSlug} from '../../type';
import {Button, Card, Text, useTheme} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import CardSlyle from './default/card.component';
import {GlobalStyle} from '../../style';
import {Variation} from '..';
import {useAppSelector} from '../../hook/state/useState.hook';
import {
  getIndicatorCurrent,
  getIndicatorCurrentBy,
} from '../../state/indicator/indicator.slice';

interface IndicatorCardProps {
  indicator: IFinancialIndicators;
  style: ViewStyle;
  onDetail: (slug: IIndicatorSlug) => void;
  onInfo: (slug: IIndicatorSlug) => void;
}
export default function IndicatorCard({
  indicator,
  style,
  onDetail,
  onInfo,
}: IndicatorCardProps) {
  const theme = useTheme();
  const currentValue = useAppSelector(state =>
    getIndicatorCurrentBy(state, indicator.slug),
  );

  const handleDetail = () => {
    onDetail(indicator.slug);
  };

  const handleInfo = () => {
    onInfo(indicator.slug);
  };

  return (
    <CardSlyle
      key={indicator.slug}
      fullHeight
      style={style}
      onPress={handleInfo}>
      <View style={[GlobalStyle.column, GlobalStyle.flex1]}>
        <Text variant="bodyLarge">{indicator.name}</Text>
        <Text variant="labelSmall">{`Simbolo: ${indicator.symbol}`}</Text>
        {currentValue && currentValue.length > 0 && currentValue[0] && (
          <Variation
            current={currentValue[0].value}
            next={currentValue[1].value || '-1'}
            symbol={indicator.currency}
            currencyVariant="titleLarge"
            profitabilityVariant="bodyMedium"
          />
        )}
      </View>

      <Card.Actions>
        <Button mode="contained-tonal" onPress={handleDetail}>
          <FontAwesomeIcon
            size={20}
            icon="circle-info"
            color={theme.colors.onPrimaryContainer}
          />
        </Button>
      </Card.Actions>
    </CardSlyle>
  );
}
