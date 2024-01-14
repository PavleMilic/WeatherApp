import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodayComponent } from './components/today/today.component';
import { HourlyComponent } from './components/hourly/hourly.component';
import { DailyComponent } from './components/daily/daily.component';
import { RadarComponent } from './components/radar/radar.component';
import { MinutecastComponent } from './components/minutecast/minutecast.component';
import { MonthlyComponent } from './components/monthly/monthly.component';
import { AirQualityComponent } from './components/air-quality/air-quality.component';
import { HealthActivitiesComponent } from './components/health-activities/health-activities.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DayInfoComponent } from './components/day-info/day-info.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodayComponent,
    HourlyComponent,
    DailyComponent,
    RadarComponent,
    MinutecastComponent,
    MonthlyComponent,
    AirQualityComponent,
    HealthActivitiesComponent,
    DayInfoComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
