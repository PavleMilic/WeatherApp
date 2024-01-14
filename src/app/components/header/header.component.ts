import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherApiService } from 'src/app/services/weather-api.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  temp: number;
  currentCity = this.weatherApiService.subject.value
  inputCity: string = '';
  city = this.currentCity;
  ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private router: Router,
    public weatherApiService: WeatherApiService
  ) { }

  ngOnInit(): void {
    this.weatherApiService.fetchWeatherApi().subscribe(response => {
      this.temp = Math.round(response.main.temp);
    })
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
  }

  cityWeather(inputCity: string) {
    this.weatherApiService.subject.next(inputCity);
    this.currentCity = this.weatherApiService.subject.value
    this.weatherApiService.fetchWeatherApi().subscribe(response => {
      this.temp = response.main.temp;
    })

    this.currentCity = this.capitalizeCityName(this.currentCity)
    return this.currentCity
  }

  capitalizeCityName(city: string): string {
    let transformedCity = city.toLowerCase();

    if (transformedCity.includes(' ')) {
      let words = transformedCity.split(' ');
      let capitalizedWords = words.map((word) => {
        let firstLetter = word[0];
        let rest = word.slice(1);
        let capitalized = firstLetter.toUpperCase() + rest;
        return capitalized;
      })
      return capitalizedWords.join(' ')
    }
    else {
      let firstLetter = transformedCity.charAt(0).toUpperCase();
      let remainingLetters = transformedCity.slice(1);
      return firstLetter + remainingLetters;
    }
  }

  navigateToToday() {
    this.router.navigate(['/today']);
  }
  navigateToHourly() {
    this.router.navigate(['/hourly']);
  }
  navigateToDaily() {
    this.router.navigate(['/daily']);
  }
  navigateToRadar() {
    this.router.navigate(['/radar']);
  }
  navigateToMinuteCast() {
    this.router.navigate(['/minutecast']);
  }
  navigateToMonthly() {
    this.router.navigate(['/monthly']);
  }
  navigateToAirQuality() {
    this.router.navigate(['/air-quality']);
  }
  navigateToHealthActivites() {
    this.router.navigate(['/health-activities']);
  }
}
