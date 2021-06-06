export interface THourForecast {
  time: string;
  temp_c: number;
  humidity: number;
  condition: {
    text: string;
    icon: string;
  };
}
export interface TForecast {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  hour: THourForecast[];
}
export interface TWeather {
  region: string;
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  forecast?: {
    forecastday: TForecast[];
  };
}
