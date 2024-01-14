import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor( private router: Router) {}

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
