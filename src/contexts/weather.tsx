import React, {createContext, useCallback, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getWeather from '../services/getWeather';
import getTimeZone from '../services/getTimeZone';
import {
  THourForecast,
  TimeZone,
  TWeather,
  TWeatherContext,
  UserCoords,
} from '../types';
import Geolocation from '@react-native-community/geolocation';
import {Alert} from 'react-native';
import {handleTreatDate} from '../utils';
import moment from 'moment';

const WeatherContext = createContext<TWeatherContext>({
  dayWeather: undefined,
  currentLocation: '',
  addCurrentLocation: () => null,
  loadingWeather: true,
  timeZone: null,
  currentHour: 0,
});

export const WeatherProvider = ({children}: any) => {
  const [dayWeather, setDayWeather] = useState<TWeather>();
  const [currentLocation, setCurrentLocation] =
    useState<string | UserCoords | null>(null);
  const [currentHour, setCurrentHour] = useState<number>(0);
  const [timeZone, setTimeZone] = useState<TimeZone | null>(null);
  const [loadingWeather, setLoadingWeather] = useState<boolean>(true);

  const loadDayWeather = useCallback(
    async (location: string | UserCoords, days: string) => {
      setLoadingWeather(true);
      let position: UserCoords | string;
      if (typeof location === 'object') {
        position = `${location.latitude},${location.longitude}`;
      } else {
        position = location;
      }
      getWeather(position, days)
        .then(response => {
          setDayWeather(response);
          setLoadingWeather(false);
        })
        .catch(err => {
          console.log(err);
          setDayWeather(undefined);
          setLoadingWeather(false);
        });
    },

    [],
  );

  const loadTimeZone = useCallback(
    async (location: string | UserCoords) => {
      setLoadingWeather(true);
      let position: UserCoords | string;
      if (typeof location === 'object') {
        position = `${location.latitude},${location.longitude}`;
      } else {
        position = location;
      }
      getTimeZone(position)
        .then(response => {
          setTimeZone(response);
        })
        .catch(err => {
          console.log(err);
          setTimeZone(null);
        });
    },

    [],
  );

  const loadCurrentLocation = useCallback(async () => {
    const location = await AsyncStorage.getItem('currentLocation');
    if (location) {
      setCurrentLocation(location);
    } else {
      Geolocation.getCurrentPosition(
        position => {
          const current = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setCurrentLocation(current);
          loadDayWeather(current, '7');
        },
        error => {
          console.log(error);
          Alert.alert(
            'Vá em privacide e autorize este App para utilizar sua localização atual',
          );
          Geolocation.setRNConfiguration({
            authorizationLevel: 'whenInUse',
            skipPermissionRequests: false,
          });
        },
      );
    }
  }, [loadDayWeather]);

  const addCurrentLocation = useCallback((location: string) => {
    AsyncStorage.setItem('currentLocation', location);
    setCurrentLocation(location);
  }, []);

  const handleSelectedHour = useCallback(hours => {
    const hourNow = `${moment().format('HH')}:00`;
    const hourIndex = hours.findIndex(
      (hour: THourForecast) => handleTreatDate(hour.time) === hourNow,
    );
    setCurrentHour(hourIndex);
  }, []);

  useEffect(() => {
    loadCurrentLocation();
  }, [loadCurrentLocation, currentLocation]);

  useEffect(() => {
    if (dayWeather) {
      handleSelectedHour(dayWeather?.forecast?.forecastday[0].hour);
    }
  }, [dayWeather, handleSelectedHour]);

  useEffect(() => {
    if (currentLocation) {
      loadTimeZone(currentLocation);
    }
  }, [currentLocation, loadTimeZone]);

  useEffect(() => {
    if (dayWeather) {
      handleSelectedHour(dayWeather?.forecast?.forecastday[0].hour);
    }
  }, [dayWeather, handleSelectedHour]);

  return (
    <WeatherContext.Provider
      value={{
        dayWeather,
        currentLocation,
        addCurrentLocation,
        loadingWeather,
        timeZone,
        currentHour,
      }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
