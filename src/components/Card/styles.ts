import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, STYLES} from '../../theme';
const {width: WIDTH} = Dimensions.get('window');

const styles = StyleSheet.create({
  ...STYLES,
  ...FONTS,
  container: {
    width: WIDTH / 4,
  },
  content: {
    backgroundColor: COLORS.WHITE.OVERLAY,
    borderRadius: 16,
    padding: 16,
    paddingVertical: 24,
    alignItems: 'center',
  },
  image: {
    width: WIDTH / 8,
    height: WIDTH / 8,
  },
});

export default styles;
