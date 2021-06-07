import React from 'react';
import {Image, Text, View, ViewStyle} from 'react-native';
import {ICONS} from '../../assets';

import styles from './styles';

type Props = {
  hour: string;
  image: any;
  temp: string;
  humidity: string;
  style?: ViewStyle;
};

const WeatherCard = ({hour, image, temp, humidity, style}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.content}>
        <View>
          <Text style={styles.p}>{hour}</Text>
          <Text style={styles.h3}>{temp}</Text>
          <View style={styles.humidityContainer}>
            <Image style={styles.mr2} source={ICONS.humidity} />
            <Text style={styles.p}>{humidity}</Text>
          </View>
        </View>
        <View>
          <Image source={{uri: image}} style={[styles.image, styles.mb2]} />
        </View>
      </View>
    </View>
  );
};

export default WeatherCard;
