import React from 'react';
import {Button, useTheme} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

interface BackProps {
  onPress: () => void;
}
export default function Back({onPress}: BackProps) {
  const {colors} = useTheme();
  return (
    <Button mode="text" onPress={onPress}>
      <FontAwesomeIcon icon="chevron-left" size={20} color={colors.inverseSurface} />
    </Button>
  );
}
