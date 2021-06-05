import {Dimensions, StyleSheet} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
  },
  weatherImage: {
    alignSelf: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  carousel: {
    marginHorizontal: -24,
  },
});

export default styles;
