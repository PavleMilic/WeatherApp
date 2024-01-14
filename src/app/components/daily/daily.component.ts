import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { WeatherResponseModel } from 'src/app/models/weather-response';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {
  data: WeatherResponseModel;
  weather$ = this.weatherApiService.fetchWeatherApi()
  sipnnerVisible: boolean = true;
  date: string;
  ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private weatherApiService: WeatherApiService,
    private datePipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.weatherApiService.subject.subscribe(() => {
      this.getData();
    })
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
  }

  getData() {
    this.weatherApiService.fetchWeatherApi().subscribe(response => {
      this.data = response
      // this.description =  response.weather[0].description
      // this.main = response.main.temp_max
      console.log(response.dt);
      const time = response.dt * 1000
      const dateinfo = new Date(time)
      this.date = this.datePipe.transform(dateinfo, 'dd.MM.yyyy')
      this.sipnnerVisible = false;
    })
  }
}
