import React from 'react';
import {View, ViewStyle, TextInput as TI} from 'react-native';
import {COLORS} from '../../theme';

import styles from './styles';

type Props = {
  onChange: (e: any) => any;
  placeholder?: string;
  style?: ViewStyle;
};

const TextInput = ({onChange, placeholder, style}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <TI
        placeholder={placeholder}
        style={styles.textInput}
        onChange={onChange}
        placeholderTextColor={COLORS.WHITE.NORMAL}
      />
    </View>
  );
};

export default TextInput;
