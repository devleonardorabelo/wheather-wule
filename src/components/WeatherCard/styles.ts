import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, STYLES} from '../../theme';
const {width: WIDTH} = Dimensions.get('window');

const styles = StyleSheet.create({
  ...STYLES,
  ...FONTS,
  container: {
    width: WIDTH / 2,
  },
  content: {
    backgroundColor: COLORS.WHITE.OVERLAY,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: WIDTH / 8,
    height: WIDTH / 8,
  },
  tempContainer: {
    flexDirection: 'row',
  },
  humidityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
