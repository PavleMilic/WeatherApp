import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, forkJoin, map, pipe, takeUntil } from 'rxjs';
import { HourlyWeatherWrapperModel } from 'src/app/models/hourlyWeather.model';
import { WeatherResponseModel } from 'src/app/models/weather-response';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit, OnDestroy {
  constructor(
    private weatherApiService: WeatherApiService,
    private datePipe: DatePipe
  ) { }
  // data: WeatherResponseModel;
  weather$ = this.weatherApiService.fetchWeatherApi()
  dateString: string;
  currentTime;
  surniseTime: string = '';
  sunsetTime: string = '';
  temp: number;
  realFeel: number;
  ngUnsubscribe: Subject<void> = new Subject<void>();

  weatherApiResponse: WeatherResponseModel
  hourlyWeatherApiResponse: HourlyWeatherWrapperModel

  ngOnInit(): void {
    this.weatherApiService.subject.subscribe(() => {
      this.weather$ = this.weatherApiService.fetchWeatherApi();
    });

    this.weatherApiService.fetchWeatherApi().subscribe(response => {
      //this.data = response;
      const timeNumbMiliSec = response.dt * 1000;
      const fullTime = new Date(timeNumbMiliSec)
      console.log(response);
      this.temp = Math.round(response.main.temp);
      this.realFeel = Math.round(response.main.feels_like)
      this.dateString = fullTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
      this.currentTime = this.datePipe.transform(fullTime, 'HH:mm a')
      const sunrise = new Date(response.sys.sunrise * 1000);
      this.surniseTime = this.datePipe.transform(sunrise, 'HH:mm a')
      const sunset = new Date(response.sys.sunset * 1000);
      this.sunsetTime = this.datePipe.transform(sunset, 'HH:mm a')
    });

    // Prvi nacin
    let batch: Array<Observable<any>> = new Array<Observable<any>>();
    batch.push(this.weatherApiService.fetchWeatherApi().pipe(map(x => this.weatherApiResponse = x)));
    batch.push(this.weatherApiService.fetchHourlyWeatherWrapperApi().pipe(map(x => this.hourlyWeatherApiResponse = x)));
    forkJoin(batch).pipe(takeUntil(this.ngUnsubscribe)).subscribe();
    // console.log(batch);

    // Drugi nacin
    // forkJoin([this.weatherApiService.fetchWeatherApi(), this.weatherApiService.fetchHourlyWeatherWrapperApi()]).subscribe(x => {

    // });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
  }

}
