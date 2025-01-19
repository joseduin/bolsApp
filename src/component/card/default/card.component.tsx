import {PropsWithChildren} from 'react';
import {TouchableWithoutFeedback, ViewStyle} from 'react-native';
import {Card, useTheme} from 'react-native-paper';
import {styles} from './card.style';

type Props = PropsWithChildren<{
  style?: ViewStyle;
  contentStyle?: ViewStyle;
  onPress?: () => void;
  fullHeight?: boolean
}>;
export default function CardSlyle({style, contentStyle, fullHeight, onPress, children}: Props) {
  const theme = useTheme();
  const colors = theme.colors as any;
  const contentStyled = [
    styles.content,
    {backgroundColor: colors.card, borderRadius: theme.roundness},
    fullHeight && styles.fullHeight,
    contentStyle,
  ];

  return (
    <Card style={style} mode="contained" contentStyle={contentStyled}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Card.Content style={[contentStyled, contentStyle]}>{children}</Card.Content>
      </TouchableWithoutFeedback>
    </Card>
  );
}
