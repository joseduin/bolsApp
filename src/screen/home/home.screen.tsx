import React, { useEffect } from 'react';
import {View} from 'react-native';
import {MainWrapper, Header} from '../../layout';
import {useAppDispatch, useAppSelector} from '../../hook/state/useState.hook';
import {
  getIndicators,
  setIndicator,
} from '../../state/indicator/indicator.slice';
import {Text} from 'react-native-paper';
import {styles} from './home.style';
import {IndicatorCard} from '../../component';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/navigation.type';
import {IIndicatorSlug} from '../../type';
import { fetchGraph } from '../../state/indicator/indicator.thunk';

function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const indicator = useAppSelector(getIndicators);
  const dispatch = useAppDispatch();

   useEffect(() => {
    dispatch(fetchGraph(indicator.dolar));
    dispatch(fetchGraph(indicator.euro));
    dispatch(fetchGraph(indicator.ipc));
    dispatch(fetchGraph(indicator.uf));
    dispatch(fetchGraph(indicator.utm));
  }, [dispatch]);
  
  const handleDetail = (slug: IIndicatorSlug) => {
    dispatch(setIndicator(slug));
    navigation.navigate('Detail', {slug});
  };

  const handleInfo = (slug: IIndicatorSlug) => {
    dispatch(setIndicator(slug));
    navigation.navigate('Historical', {slug});
  };

  return (
    <MainWrapper header={<Header title="BolsApp" geo />}>
      <View style={styles.indicatorsWrap}>
        <IndicatorCard
          indicator={indicator.dolar}
          style={styles.indicatorFullWidth}
          onDetail={handleDetail}
          onInfo={handleInfo}
        />
        <IndicatorCard
          indicator={indicator.euro}
          style={styles.indicatorDoubleHeight}
          onDetail={handleDetail}
          onInfo={handleInfo}
        />
        <View style={styles.indicatorCol}>
          <IndicatorCard
            indicator={indicator.ipc}
            style={styles.indicatorHalfWidth}
            onDetail={handleDetail}
            onInfo={handleInfo}
          />
          <IndicatorCard
            indicator={indicator.uf}
            style={styles.indicatorHalfWidth}
            onDetail={handleDetail}
            onInfo={handleInfo}
          />
        </View>
        <IndicatorCard
          indicator={indicator.utm}
          style={styles.indicatorFullWidth}
          onDetail={handleDetail}
          onInfo={handleInfo}
        />
      </View>
    </MainWrapper>
  );
}

export default HomeScreen;
