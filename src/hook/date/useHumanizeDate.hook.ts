import {useMemo} from 'react';
import {Dates} from '../../util';

const useHumanizeDate = (date: string) => {
  const formattedDate = useMemo(() => {
    if (!date) return '';

    return Dates.humanize(date);
  }, [date]);

  return formattedDate;
};

export default useHumanizeDate;
