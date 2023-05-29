import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherAppComponent } from './components/weather-app/weather-app.component';

const routes: Routes = [
  {path: '' ,redirectTo: '/weather-app', pathMatch: 'full'},
  {path: 'weather-app', component: WeatherAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
