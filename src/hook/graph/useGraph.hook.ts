import {useEffect, useState} from 'react';
import {IIndicator} from '../../type';
import {Dates, NumberUtil} from '../../util';

const useGraph = (indicators: IIndicator[]) => {
  const [data, setData] = useState<{x: string; y: number}[]>([]);

  useEffect(() => {
    const result = indicators.map(indicator => ({
      x: Dates.format(indicator.date, "MMM D"),
      y: NumberUtil.toNumber(indicator.value),
    }));

    setData(result);
  }, [indicators]);

  return data;
};

export default useGraph;
