import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../theme';

const styles = StyleSheet.create({
  ...FONTS,
  container: {
    padding: 24,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: COLORS.WHITE.OVERLAY,
    borderRadius: 16,
  },
  unselected: {
    borderWidth: 1,
    borderColor: COLORS.WHITE.NORMAL,
    borderRadius: 16,
    opacity: 0.5,
  },
});

export default styles;
