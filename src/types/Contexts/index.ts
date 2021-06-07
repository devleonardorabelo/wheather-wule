import {TWeather} from '../Entities';

export type TWeatherContext = {
  dayWeather: TWeather | undefined;
  currentLocation: string | undefined;
  loadDayWeather: (city: string, days: number) => void;
  addCurrentLocation: (Location: string) => void;
  loadingWeather: boolean;
};
