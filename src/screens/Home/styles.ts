import {StyleSheet} from 'react-native';
import {COLORS, FONTS, STYLES} from '../../theme';

const styles = StyleSheet.create({
  ...FONTS,
  ...STYLES,
  button: {
    alignSelf: 'flex-end',
  },
  cardContainer: {
    flexDirection: 'row',
    marginBottom: 24,
    justifyContent: 'space-between',
    padding: 24,
    borderWidth: 1,
    borderColor: COLORS.WHITE.OVERLAY,
    borderRadius: 16,
  },
  carousel: {
    marginHorizontal: -24,
  },
});

export default styles;
