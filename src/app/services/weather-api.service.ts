import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { WeatherResponseModel } from '../models/weather-response';
import { BehaviorSubject, Observable } from 'rxjs';
import { HourlyWeatherWrapperModel } from '../models/hourlyWeather.model';
@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  apiKey = 'b941216919a60893d5f36a5e080409c5'
  inputCity: string = 'Belgrade';
  subject = new BehaviorSubject<string>(this.inputCity);
  // cityNameUrl: string = `https://api.openweathermap.org/data/2.5/weather?q=${this.inputCity}&appid=${this.apiKey}&units=metric`

  constructor(private http: HttpClient) { }

  fetchWeatherApi(): Observable<WeatherResponseModel> {
    return this.http.get<WeatherResponseModel>(`https://api.openweathermap.org/data/2.5/weather?q=${this.subject.value}&appid=${this.apiKey}&units=metric`)
  }

  fetchHourlyWeatherWrapperApi(): Observable<HourlyWeatherWrapperModel> {
    return this.http.get<HourlyWeatherWrapperModel>(`https://api.openweathermap.org/data/2.5/forecast?q=${this.subject.value}&appid=${this.apiKey}&units=metric`)
  }


}
