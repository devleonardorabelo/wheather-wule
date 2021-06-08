import {TimeZone, TWeather, UserCoords} from '../Entities';

export type TWeatherContext = {
  dayWeather: TWeather | undefined;
  currentLocation: string | UserCoords | null;
  addCurrentLocation: (Location: string) => void;
  loadingWeather: boolean;
  timeZone: TimeZone | null;
  currentHour: number;
};
