import React, {useEffect} from 'react';
import {MainWrapper, Header} from '../../layout';
import {useAppDispatch, useAppSelector} from '../../hook/state/useState.hook';
import {getIndicator} from '../../state/indicator/indicator.slice';
import {fetchGraph} from '../../state/indicator/indicator.thunk';
import {HistoricalGraph, IndicatorValueCard} from '../../component';
import {Text} from 'react-native-paper';

function DetailScreen() {
  const indicator = useAppSelector(getIndicator);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGraph(indicator));
  }, [dispatch]);

  return (
    <MainWrapper header={<Header title={indicator.name} back />}>
      <Text variant="headlineLarge">Detalle</Text>
      <IndicatorValueCard indicator={indicator} />
      <HistoricalGraph />
    </MainWrapper>
  );
}

export default DetailScreen;
