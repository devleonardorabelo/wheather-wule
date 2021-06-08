import React from 'react';
import {View, ViewStyle, TextInput as TI} from 'react-native';
import {COLORS} from '../../theme';

import styles from './styles';

type Props = {
  onChangeText: (e: any) => any;
  placeholder?: string;
  style?: ViewStyle;
  onEndEditing: () => void;
  defaultValue: string;
  onFocus: () => void;
};

const TextInput = ({
  onChangeText,
  onEndEditing,
  placeholder,
  defaultValue,
  style,
  onFocus,
}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <TI
        onTouchStart={onFocus}
        onEndEditing={onEndEditing}
        placeholder={placeholder}
        style={styles.textInput}
        onChangeText={onChangeText}
        placeholderTextColor={COLORS.WHITE.NORMAL}
        defaultValue={defaultValue}
      />
    </View>
  );
};

export default TextInput;
