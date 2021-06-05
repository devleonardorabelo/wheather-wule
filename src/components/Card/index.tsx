import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles';

type Props = {
  image: any;
  title: string;
};

const Card = ({image, title}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={image} style={[styles.image, styles.mb2]} />
        <Text style={styles.strong}>{title}</Text>
      </View>
    </View>
  );
};

export default Card;
