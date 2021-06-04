import React from 'react';
import {Image, Pressable, StyleProp, ViewStyle} from 'react-native';

import styles from './styles';

type Props = {
  image: {uri: string};
  style?: StyleProp<ViewStyle>;
  onPress: () => any;
};

const Button = ({image, style, onPress}: Props) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <Image source={image} />
    </Pressable>
  );
};

export default Button;
