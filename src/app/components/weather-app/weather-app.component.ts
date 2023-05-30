import { Component, OnInit } from '@angular/core';
import { weatherData, weatherCurrentData } from 'src/app/interfaces/weather.interface';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit {
  weatherForecast: weatherData[] = [];
  weatherCurrent!: weatherCurrentData;
  currentTimestamp: string = '';
  city: string = '';
  public base_url = 'https://openweathermap.org/img/wn'

  constructor(private weatherService: WeatherService) {
      const date = new Date();
      this.currentTimestamp = date.toLocaleTimeString();
  }

  ngOnInit() {
    // Obtener el pronóstico del tiempo
    this.loadForecast();
    this.loadCurrent();
  }

  loadForecast() {
    let query = 'Buenos%20Aires,ar';
    this.weatherService.getForecast(query).subscribe( (data: any) => {
      this.weatherForecast = data.list;
      console.log(data.list);
      this.city = data.city.name;
    });
  }
  loadCurrent() {
    let query = 'Buenos%20Aires,ar';
    this.weatherService.getCurrentWeather(query).subscribe( (data: any) => {
      this.weatherCurrent = data;
      console.log( this.weatherCurrent );
      
    });

}
}