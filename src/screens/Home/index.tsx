import React from 'react';
import {Dimensions, Image, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {HomeProps} from '../../types/navigation';
import {COLORS} from '../../theme';
import {ICONS, IMAGES} from '../../assets';

const {width: WIDTH} = Dimensions.get('window');

import {Button, Card, Page} from '../../components';
import styles from './styles';

const Home = ({navigation}: HomeProps) => {
  return (
    <Page primaryColor={COLORS.BLUE.NORMAL} secondaryColor={COLORS.BLUE.LIGHT}>
      <Button
        image={ICONS.settings}
        style={styles.button}
        onPress={() => navigation.push('Configuration')}
      />
      <View style={styles.weatherImage}>
        <Image source={IMAGES.sunCloud} />
      </View>
      <View style={styles.carousel}>
        <Carousel
          inactiveSlideScale={0.85}
          sliderWidth={WIDTH}
          itemWidth={WIDTH / 4}
          data={[0, 1, 2, 3, 4, 5]}
          renderItem={() => <Card image={ICONS.sun} title="13:00" />}
        />
      </View>
    </Page>
  );
};

export default Home;
