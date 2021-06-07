import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles';

type Props = {
  image: string;
  centerText: string;
  bottomText: string;
};

const TopInfo = ({image, centerText, bottomText}: Props) => {
  return (
    <View style={[styles.container, styles.mb3]}>
      <Image
        style={[styles.image, styles.mr3]}
        resizeMode="contain"
        source={{
          uri: image,
        }}
      />
      <View>
        <Text style={styles.h1}>{centerText}</Text>
        <Text style={styles.p}>{bottomText}</Text>
      </View>
    </View>
  );
};

export default TopInfo;
