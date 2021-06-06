import React, {createContext, useCallback, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getWeather from '../services/getWeather';
import {TWeather, TWeatherContext} from '../types';

const WeatherContext = createContext<TWeatherContext>({
  dayWeather: undefined,
  loadDayWeather: () => null,
  currentLocation: '',
  addCurrentLocation: () => null,
  loadingWeather: true,
});

export const WeatherProvider = ({children}: any) => {
  const [dayWeather, setDayWeather] = useState<TWeather>();
  const [currentLocation, setCurrentLocation] = useState<string>();
  const [loadingWeather, setLoadingWeather] = useState<boolean>(true);

  const loadDayWeather = useCallback(async (city: string, date: string) => {
    setLoadingWeather(true);
    getWeather(city, date)
      .then(response => {
        setDayWeather(response);
        setLoadingWeather(false);
      })
      .catch(err => {
        console.log(err);
        setDayWeather(undefined);
        setLoadingWeather(false);
      });
  }, []);

  const loadCurrentLocation = async () => {
    const location = await AsyncStorage.getItem('currentLocation');
    if (location) {
      setCurrentLocation(location);
    }
  };

  const addCurrentLocation = (location: string) => {
    AsyncStorage.setItem('currentLocation', location);
    setCurrentLocation(location);
  };

  useEffect(() => {
    loadCurrentLocation();
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        dayWeather,
        loadDayWeather,
        currentLocation,
        addCurrentLocation,
        loadingWeather,
      }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
