export class HourlyWeatherWrapperModel {
    message: number;
    // cnt: HourlyWeatherMainModel;
    cnt: number;
    list: Array<HourlyWeatherListModel>
    city: HourlyWeatherCityModel;
}

export class HourlyWeatherListModel {
    dt: number;
    main: HourlyWeatherMainModel;
    weather: Array<HourlyWeatherWeatherModel>
    wind: HourlyWeatherWindModel
    dt_txt: string;
    date: string;
    tranformedTime: string;
    clouds: {
        all: number;
    }
    visability: number;
    sunny: boolean;
    cloudy: boolean;
    rainy: boolean;
    isOpen: boolean;
    temp: number;
}

export class HourlyWeatherMainModel {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export class HourlyWeatherCityModel {
    id: number;
    name: string;
    country: string;
    timezone: number;
}
export class HourlyWeatherWeatherModel {
    id: number;
    main: string;
    description: string;
    icon: string

}
export class HourlyWeatherWindModel {
    speed: number;
    deg: number;
    gust: number;
}