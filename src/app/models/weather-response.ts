export interface WeatherResponseModel {
  coord: {
    lat: number;
    lon: number;
  }
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ]
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_lebel: number;

  }
  visability: number; // vraca undefined, problem sa apijem
  wind: {
    speed: number;
    deg: number;
    gust: number; // vraca undefined, problem sa apijem
  }
  clouds: {
    all: number;
  }
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  }
  timezone: number;
  name: string;
}
