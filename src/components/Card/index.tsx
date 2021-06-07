import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

type Props = {
  image: any;
  title: string;
  text: string;
};

const Card = ({image, title, text}: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.p}>{title}</Text>
      <Text style={styles.strong}>{text}</Text>
    </View>
  );
};

export default Card;
