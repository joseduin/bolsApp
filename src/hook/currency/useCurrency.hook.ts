import {useMemo, useRef} from 'react';
import {NumberUtil} from '../../util';

const useCurrency = (value: string, symbol: string = "$") => {
  const currency = useRef(symbol);
  const formatted = useMemo(() => {
    if (!value) return '';

    const number = NumberUtil.toNumber(value);
    return NumberUtil.format(number);
  }, [value]);

  return `${currency.current} ${formatted}`;
};

export default useCurrency;
