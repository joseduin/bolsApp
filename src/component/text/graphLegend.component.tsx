import {Text} from 'react-native-paper';
import {useAppSelector} from '../../hook/state/useState.hook';
import {getIndicator} from '../../state/indicator/indicator.slice';
import useGraphLegend from '../../hook/graph/useGraphLegend.hook';
import { View } from 'react-native';

export default function GraphLegend() {
  const indicator = useAppSelector(getIndicator);
  const label = useGraphLegend(indicator);

  return <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 8}}>
    <Text variant='bodyMedium'>{label}</Text>
  </View>;
}
