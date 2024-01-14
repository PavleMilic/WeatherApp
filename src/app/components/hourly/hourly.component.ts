import { DatePipe } from '@angular/common';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { HourlyWeatherListModel } from 'src/app/models/hourlyWeather.model';
import { WeatherApiService } from 'src/app/services/weather-api.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('start', style({
        height: '130px'
      })),
      state('end', style({

        height: '350px'
      })),
      transition('start <=> end', animate('500ms ease-in-out'))
    ]), trigger('InfoVisability', [
      state('start', style({
        opacity: 0,

      })),
      state('end', style({
        opacity: 1,


      })),
      transition('start <=> end', animate('500ms 500ms ease-in-out'))

    ])
  ]
})

export class HourlyComponent implements OnInit {

  weatherDays: Array<Array<HourlyWeatherListModel>> = [];
  info: boolean = false;
  animationState: string = 'start'
  ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private weatherService: WeatherApiService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.weatherService.subject.subscribe(() => {
      this.weatherService.fetchHourlyWeatherWrapperApi().subscribe(x => {
        let currentDate: string = '';
        let currentDateArray: Array<HourlyWeatherListModel> = [];

        x.list.forEach(forecast => {

          forecast.date = forecast.dt_txt.split(' ')[0];
          let time: number = forecast.dt * 1000
          let timeOfDay: Date = new Date(time);
          forecast.tranformedTime = this.datePipe.transform(timeOfDay, 'HH a')
          forecast.temp = Math.round(forecast.main.temp)

          forecast.sunny = (forecast.weather[0].description).includes('clear')
          forecast.cloudy = (forecast.weather[0].description).includes('clouds')
          forecast.rainy = (forecast.weather[0].description).includes('rain')

          if (!currentDate) {
            currentDate = forecast.date;

          }

          if (forecast.date !== currentDate) {
            this.weatherDays.push(currentDateArray);
            currentDateArray = [];

            currentDate = forecast.date;
          }

          currentDateArray.push(forecast);

        })

        console.log(this.weatherDays);

      });

    })


  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
  }

  toggleInfo(time: HourlyWeatherListModel) {
    time.isOpen = !time.isOpen;
    setTimeout(() => {
      this.animationState = this.animationState === 'start' ? 'end' : 'start'
    })
  }

}
