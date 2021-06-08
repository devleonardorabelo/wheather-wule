import {Error, TimeZone, TWeather, UserCoords} from '../Entities';

export type TWeatherContext = {
  dayWeather: TWeather | undefined;
  currentLocation: string | UserCoords | null;
  addCurrentLocation: (Location: string) => void;
  removeCurrentLocation: () => void;
  loadingWeather: boolean;
  timeZone: TimeZone | null;
  currentHour: number;
  errorAlert: Error | null;
};
