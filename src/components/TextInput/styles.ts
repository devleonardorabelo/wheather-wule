import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE.OVERLAY,
    borderRadius: 16,
  },
  textInput: {
    ...FONTS.p,
    padding: 16,
  },
});

export default styles;
