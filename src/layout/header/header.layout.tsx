import React from 'react';
import {ActivityIndicator} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/navigation.type';
import {Appbar, Button} from 'react-native-paper';
import {useAppSelector} from '../../hook/state/useState.hook';
import {getLoading} from '../../state/indicator/indicator.slice';
import {BackButton, GeoButton} from '../../component';

interface Props {
  title: string;
  back?: boolean;
  center?: boolean;
  geo?: boolean;
}
export default function Header(props: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const loading = useAppSelector(getLoading);

  const {back, center, title, geo} = props;
  const mode = center ? 'center-aligned' : undefined;

  function goBack() {
    navigation.goBack();
  }

  return (
    <Appbar.Header mode={mode}>
      {back && <BackButton onPress={goBack} />}
      <Appbar.Content title={title} />
      {loading && <Button mode="text" disabled><ActivityIndicator animating size="small" /></Button>}
      {geo && <GeoButton />}
    </Appbar.Header>
  );
}
