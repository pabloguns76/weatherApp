
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { weatherData } from 'src/app/interfaces/weather.interface';
import { WeatherServicesService } from 'src/app/services/weather-services.service';


@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent  implements OnInit {

  weatherForecast: weatherData [] = [];
  city:string = '';
  constructor(private http: HttpClient , private weatherService: WeatherServicesService) {}

  ngOnInit() {
    // Obtener el pronóstico del tiempo
    this.http.get<any>(`https://api.openweathermap.org/data/2.5/forecast?q=Buenos%20Aires,ar&appid=${this.weatherService.apikey}&units=metric`)
      .subscribe(data => {
        console.log(JSON.stringify(data.city.name))
        this.weatherForecast = data.list;
        this.city = data.city.name;
      });
  }
}

