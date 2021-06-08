import {StyleSheet} from 'react-native';
import {FONTS, STYLES} from '../../theme';

const styles = StyleSheet.create({
  ...STYLES,
  ...FONTS,
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  conditionContainer: {
    flexShrink: 1,
  },
  image: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: 96,
    width: 96,
  },
});

export default styles;
