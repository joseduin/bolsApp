import React, {PureComponent} from 'react';
import Currency from './currency.component ';
import {NumberUtil} from '../../util';
import {GlobalStyle} from '../../style';
import {Text, useTheme} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

interface PropsMain {
  current: string;
  next: string;
  downColor: string;
  upColor: string;
  displayCurrency?: boolean;
  profitabilityVariant?: any;
  currencyVariant?: any;
  symbol?: string;
}
interface Props extends Omit<PropsMain, 'downColor' | 'upColor'> {}

class Variation extends PureComponent<PropsMain> {
  calculatePercentageDifference(value1: number, value2: number): string {
    const difference = Math.abs(value1 - value2);
    const average = (value1 + value2) / 2;
    const percentageDifference = (difference / average) * 100;

    return `${percentageDifference.toFixed(2)}%`;
  }

  render() {
    const {current, downColor, next, upColor, displayCurrency, profitabilityVariant, currencyVariant, symbol} = this.props;
    const currency = [undefined, true].includes(displayCurrency)
      ? (<Currency variant={currencyVariant || "bodyMedium"} value={this.props.current} symbol={symbol || "$"} />) 
      : (<></>);

    if (this.props.next === '-1') return currency;

    const currentValue = NumberUtil.toNumber(current);
    const nextValue = NumberUtil.toNumber(next);
    const isUp = currentValue > nextValue;
    const variation = isUp ? 'caret-up' : 'caret-down';
    const color = isUp ? upColor : downColor;
    const smallVariant = profitabilityVariant || 'labelSmall';

    return (
      <View style={GlobalStyle.column}>
        {currency}
        <Text variant={smallVariant} style={{color}}>
          <FontAwesomeIcon icon={variation} color={color} style={styles.icon} />
          {this.calculatePercentageDifference(currentValue, nextValue)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    transform: [{translateY: 6}],
  },
});

const VariationWithTheme = (props: Props) => {
  const {colors} = useTheme();
  return (
    <Variation {...props} downColor={colors.error} upColor={colors.primary} />
  );
};

export default VariationWithTheme;
