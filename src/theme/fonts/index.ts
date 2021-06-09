import {TextStyle} from 'react-native';
import {COLORS} from '..';

interface AppFonts {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  p: TextStyle;
  center: TextStyle;
  strong: TextStyle;
}

const FONTS: AppFonts = {
  h1: {
    // fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: 48,
    lineHeight: 51,
    color: COLORS.WHITE.NORMAL,
  },
  h2: {
    // fontFamily: 'Roboto-Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 39,
    color: COLORS.WHITE.NORMAL,
  },
  h3: {
    // fontFamily: 'Roboto-Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 27,
    color: COLORS.WHITE.NORMAL,
  },
  p: {
    // fontFamily: 'Roboto-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 21,
    color: COLORS.WHITE.NORMAL,
  },
  center: {
    textAlign: 'center',
  },
  strong: {
    // fontFamily: 'Roboto-Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
    color: COLORS.WHITE.NORMAL,
  },
};

export default FONTS;
