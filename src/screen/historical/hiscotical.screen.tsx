import React, {useEffect} from 'react';
import {MainWrapper, Header} from '../../layout';
import {useAppDispatch, useAppSelector} from '../../hook/state/useState.hook';
import {getIndicator} from '../../state/indicator/indicator.slice';
import {Text} from 'react-native-paper';
import {fetchIndicators} from '../../state/indicator/indicator.thunk';
import {Historical} from '../../component';

function Hiscoticalcreen() {
  const indicator = useAppSelector(getIndicator);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchIndicators(indicator));
  }, [dispatch]);

  return (
    <MainWrapper header={<Header title={indicator.name} back />}>
      <Text variant="headlineLarge">Historico</Text>
      <Historical />
    </MainWrapper>
  );
}

export default Hiscoticalcreen;
