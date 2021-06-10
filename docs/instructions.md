### Funções

```jsx
// Retorna o Clima de cada dia, onde days refere-se a quantidade de dias
loadDayWeather(location, days);

// Retorna o Fuso horário do local selecionado
loadTimeZone(location);

// Recupera a posição em coordenadas da localização atual ou a escolhida em configurações
loadCurrentLocation();

// Salva a cidade descrita pelo usuário na tela de configurações no Storage do dispositivo
addCurrentLocation(location);

// Remove a cidade descrita pelo usuário para utilizar as coordenadas do usuário
removeCurrentLocation();

// Requisita a permissão de geolocalização para o usuário
handleLocationPermission();
```

### Tipagem

```jsx

// Clima de cada hora de um dia específico
THourForecast {
  time: string;
  temp_c: number;
  humidity: number;
  condition: {
    text: string;
    icon: string;
  };
}

// Clima do dia (Não é o dia atual)
TForecast {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    avghumidity: number;
  };
  hour: THourForecast[];
}

// Clima do dia Atual
TWeather {
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

// Fuso horário da localização atual/selecionada do usuário
TimeZone {
  location: {
    name: string;
    region: string;
    country: string;
  };
}
// Coordenadas do usuário
UserCoords = {
  latitude: number;
  longitude: number;
};

// Erros na aplicação
Error = {
  title: string;
  text: string;
};


```
