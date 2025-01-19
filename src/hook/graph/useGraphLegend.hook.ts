import {useMemo} from 'react';
import {IFinancialIndicators} from '../../type';

const PERIOD_HUMAN = {
  days: 'días',
  months: 'meses',
  years: 'años',
}
const useGraphLegend = (indicator: IFinancialIndicators) => {
  const formatted = useMemo(() => {
    const query = indicator.request.searchGraph;
    const [type, period, amount] = query.split('|') as [string, keyof typeof PERIOD_HUMAN, string];

    return `Fluctuación del ${indicator.slug} en los últimos ${amount} ${PERIOD_HUMAN[period]}`;
  }, [indicator]);

  return formatted;
};

export default useGraphLegend;
