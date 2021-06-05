import React from 'react';
import {Image, View, Text, ViewStyle, Pressable} from 'react-native';

import styles from './styles';

type Props = {
  onPress: (e: any) => any;
  title: string;
  icon?: any;
  children?: JSX.Element | JSX.Element[];
  selected: boolean;
  style?: ViewStyle;
};

const Selectable = ({
  onPress,
  title,
  icon,
  selected,
  style,
  children,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        selected ? styles.selected : styles.unselected,
        style,
      ]}>
      <View style={styles.content}>
        <Text style={styles.strong}>{title}</Text>
        {icon && <Image source={icon} />}
      </View>
      {children}
    </Pressable>
  );
};

export default Selectable;
