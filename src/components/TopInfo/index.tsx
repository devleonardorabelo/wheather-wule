import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles';

type Props = {
  image: string;
  temperature: string;
  condition: string;
  location: string;
};

const TopInfo = ({image, temperature, condition, location}: Props) => {
  return (
    <View style={[styles.container, styles.mb3]}>
      <Image
        style={[styles.image, styles.mr3]}
        resizeMode="contain"
        source={{
          uri: image,
        }}
      />
      <View style={styles.conditionContainer}>
        <Text style={styles.h1}>{temperature}</Text>
        <Text style={styles.p}>{condition}</Text>
        <Text style={styles.p}>{location}</Text>
      </View>
    </View>
  );
};

export default TopInfo;
