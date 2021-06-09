import React, {useCallback, useContext, useEffect, useRef} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import moment from 'moment';

import WeatherContext from '../../contexts/weather';
import {HomeProps} from '../../types/Navigation/navigation';
import {COLORS} from '../../theme';
import {ICONS} from '../../assets';
import {TForecast, THourForecast} from '../../types';
import {handleTreatDate, handleTreatImage} from '../../utils';

import {Button, WeatherCard, Page, TopInfo, Card} from '../../components';
const {width: WIDTH} = Dimensions.get('window');
import styles from './styles';
import SplashScreen from 'react-native-splash-screen';

const Home = ({navigation}: HomeProps) => {
  const {
    dayWeather,
    timeZone,
    currentHour,
    loadingWeather,
    errorAlert,
    removeCurrentLocation,
  } = useContext(WeatherContext);
  const carousel: {current: any} = useRef(null);

  const handleSelectedHour = useCallback(() => {
    setTimeout(() => {
      carousel.current.snapToItem(currentHour, 500);
      setTimeout(() => {
        carousel.current.snapToItem(currentHour, 500);
      }, 500);
    }, 500);
  }, [currentHour]);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  if (errorAlert) {
    return (
      <Page
        primaryColor={COLORS.BLUE.NORMAL}
        secondaryColor={COLORS.BLUE.LIGHT}>
        <View style={styles.errorContainer}>
          <Image style={styles.mb3} source={ICONS.tempMax} />
          <Text style={styles.h3}>{errorAlert?.title}</Text>
          <Text style={[styles.p, styles.center]}>{errorAlert?.text}</Text>
          <Button
            image={ICONS.reload}
            style={styles.mt3}
            onPress={() => removeCurrentLocation()}
          />
        </View>
      </Page>
    );
  } else if (loadingWeather) {
    return (
      <Page
        primaryColor={COLORS.BLUE.NORMAL}
        secondaryColor={COLORS.BLUE.LIGHT}>
        <View style={styles.errorContainer}>
          <Image style={styles.mb3} source={ICONS.tempMin} />
          <Text style={styles.h3}>Carregando</Text>
        </View>
      </Page>
    );
  }

  const currentWeather = dayWeather?.forecast?.forecastday[0];
  const weekWeather = dayWeather?.forecast?.forecastday;

  return (
    <Page primaryColor={COLORS.BLUE.NORMAL} secondaryColor={COLORS.BLUE.LIGHT}>
      <Button
        image={ICONS.settings}
        style={styles.button}
        onPress={() => navigation.push('Configuration')}
      />
      <Text style={[styles.h2, styles.mb3]}>Hoje</Text>
      <TopInfo
        image={handleTreatImage(currentWeather?.day?.condition?.icon || '')}
        temperature={`${dayWeather?.current.temp_c}º`}
        condition={currentWeather?.day?.condition?.text || ''}
        location={`${timeZone?.location?.name}, ${timeZone?.location?.region}`}
      />

      <View style={styles.cardContainer}>
        <Card
          image={ICONS.tempMin}
          title="Mínima"
          text={`${currentWeather?.day?.mintemp_c}º`}
        />
        <Card
          image={ICONS.dayHumidity}
          title="Umidade"
          text={`${currentWeather?.day?.avghumidity}%`}
        />
        <Card
          image={ICONS.tempMax}
          title="Máxima"
          text={`${currentWeather?.day?.maxtemp_c}º`}
        />
      </View>

      <View style={[styles.carousel, styles.mb4]}>
        {currentWeather?.hour && (
          <Carousel
            onLayout={() => handleSelectedHour()}
            ref={carousel}
            inactiveSlideScale={0.85}
            keyExtractor={item => String(item.time)}
            inactiveSlideShift={8}
            sliderWidth={WIDTH}
            itemWidth={WIDTH / 2}
            data={currentWeather?.hour}
            renderItem={({item}: {item: THourForecast}) => (
              <WeatherCard
                hour={handleTreatDate(item.time)}
                image={handleTreatImage(item.condition.icon)}
                temp={`${item.temp_c}º`}
                humidity={`${item.humidity}%`}
              />
            )}
          />
        )}
      </View>
      <Text style={[styles.h3, styles.mb3]}>Próximos dias</Text>
      <View>
        {weekWeather?.map((item: TForecast, index) => {
          if (index === 0) {
            return;
          }
          return (
            <WeatherCard
              key={item.date}
              style={styles.mb3}
              hour={moment(item.date).format('DD/MM')}
              image={handleTreatImage(item.day.condition.icon)}
              temp={`${item.day.mintemp_c}º / ${item.day.maxtemp_c}º`}
              humidity={`${item.day.avghumidity}%`}
            />
          );
        })}
      </View>
    </Page>
  );
};

export default Home;
