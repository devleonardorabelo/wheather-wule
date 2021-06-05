import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

type Props = {
  topText: string;
  centerText: string;
  bottomText: string;
};

const TopInfo = ({topText, centerText, bottomText}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.strong, styles.mb2]}>{topText}</Text>
      <Text style={styles.h1}>{centerText}</Text>
      <Text style={styles.strong}>{bottomText}</Text>
    </View>
  );
};

export default TopInfo;
