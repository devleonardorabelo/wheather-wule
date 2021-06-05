import {TextStyle} from 'react-native';
import {COLORS} from '..';

interface AppFonts {
  h1: TextStyle;
  h2: TextStyle;
  p: TextStyle;
  strong: TextStyle;
}

const FONTS: AppFonts = {
  h1: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: 48,
    lineHeight: 51,
    color: COLORS.WHITE.NORMAL,
  },
  h2: {
    fontFamily: 'Roboto-Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 27,
    color: COLORS.WHITE.NORMAL,
  },
  p: {
    fontFamily: 'Roboto-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 21,
    color: COLORS.WHITE.NORMAL,
  },
  strong: {
    fontFamily: 'Roboto-Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
    color: COLORS.WHITE.NORMAL,
  },
};

export default FONTS;
