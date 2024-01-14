import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayComponent } from './components/today/today.component';
import { RadarComponent } from './components/radar/radar.component';
import { MonthlyComponent } from './components/monthly/monthly.component';
import { MinutecastComponent } from './components/minutecast/minutecast.component';
import { HourlyComponent } from './components/hourly/hourly.component';
import { HealthActivitiesComponent } from './components/health-activities/health-activities.component';
import { DailyComponent } from './components/daily/daily.component';
import { AirQualityComponent } from './components/air-quality/air-quality.component';

const routes: Routes = [
  { path: '', component: TodayComponent},
  { path: 'today', component: TodayComponent },
  { path: 'radar', component: RadarComponent },
  { path: 'monthly', component: MonthlyComponent },
  { path: 'minutecast', component: MinutecastComponent },
  { path: 'hourly', component: HourlyComponent },
  { path: 'health-activities', component: HealthActivitiesComponent },
  { path: 'daily', component: DailyComponent },
  { path: 'air-quality', component: AirQualityComponent },
  { path: '**', component: TodayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
