import React from 'react';
import {CartesianChart, Area} from 'victory-native';
import {useAppSelector} from '../../hook/state/useState.hook';
import {
  getErrorGraph,
  getInficatorGraph,
} from '../../state/indicator/indicator.slice';
import {ActivityIndicator, Text, useTheme} from 'react-native-paper';
import {useFont} from '@shopify/react-native-skia';
import {NumberUtil} from '../../util';
import {styles} from './historicalGraph.style';
import CardSlyle from '../card/default/card.component';
import GraphLegend from '../text/graphLegend.component';
import useGraph from '../../hook/graph/useGraph.hook';

const averta = require('../../assets/fonts/averta.ttf');

function HistoricalGraph() {
  const indicators = useAppSelector(getInficatorGraph);
  const error = useAppSelector(getErrorGraph);
  const graphData = useGraph(indicators || []);
  const font = useFont(averta, 12);
  const {colors} = useTheme();

  function formatYLabel(label: number) {
    return NumberUtil.format(label);
  }

  if (error) return <Text>{error}</Text>;

  if (graphData.length === 0)
    return <ActivityIndicator animating={true} size="large" />;

  return (
    <CardSlyle contentStyle={styles.wrap}>
      <CartesianChart
        data={graphData}
        xKey="x"
        yKeys={['y']}
        axisOptions={{font, formatYLabel, labelColor: colors.inverseSurface}}>
        {({points, chartBounds}) => (
          <Area
            points={points.y}
            y0={chartBounds.bottom}
            color={colors.onPrimaryContainer}
            animate={{type: 'timing', duration: 300}}
            connectMissingData
          />
        )}
      </CartesianChart>

      <GraphLegend />
    </CardSlyle>
  );
}

export default HistoricalGraph;
