import { Component, OnInit } from '@angular/core';
import {
  weatherData,
  weatherCurrentData,
} from 'src/app/interfaces/weather.interface';
import { IconServicesService } from 'src/app/services/icon-services.service';
import { WeatherService } from 'src/app/services/weather.service';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css'],
})
export class WeatherAppComponent implements OnInit {
  weatherForecast: weatherData[] = [];
  weatherCurrent!: weatherCurrentData;
  currentTimestamp: string = '';
  city: string = '';
  public base_url = 'https://openweathermap.org/img/wn';
  showTitle: boolean =false ;

  constructor(
    private weatherService: WeatherService,
    private iconsServices: IconServicesService
  ) {
    const date = new Date();
    this.currentTimestamp = date.toLocaleTimeString();
  }

  ngOnInit() {
    // Obtener el pronóstico del tiempo
    this.loadForecast();
    this.loadCurrent();
  }

  loadForecast() {
    // let query = 'Buenos%20Aires,ar';
    this.weatherService.getForecast(this.city).subscribe((data: any) => {
      this.weatherForecast = data.list;
      this.city = data.city.name;
    });
  }
  loadCurrent() {
    //let query = 'Buenos%20Aires,ar';
    this.weatherService.getCurrentWeather(this.city).subscribe((data: any) => {
      this.weatherCurrent = data;
      console.log(this.weatherCurrent);
    });
  }

  onSearchCity(city: string) {
    this.city = city;
    console.log(this.city);
    this.loadForecast();
    this.loadCurrent();
    this.showTitle = true;
  }

  isStartOfDay(weather: weatherData): boolean {
    const forecastDate = new Date(weather.dt_txt).getHours();
    return forecastDate === 0; // Verifica si es la primera hora del día (00:00)
  }

  getMaxTemperatureOfDay(weather: weatherData): number {
    const forecastDate = new Date(weather.dt_txt).getDate();
    const temperatures = this.weatherForecast
      .filter(
        (forecast) => new Date(forecast.dt_txt).getDate() === forecastDate
      )
      .map((forecast) => forecast.main.temp_max);
    return Math.max(...temperatures);
  }

  getMinTemperatureOfDay(weather: weatherData): number {
    const forecastDate = new Date(weather.dt_txt).getDate();
    const temperatures = this.weatherForecast
      .filter(
        (forecast) => new Date(forecast.dt_txt).getDate() === forecastDate
      )
      .map((forecast) => forecast.main.temp_min);
    return Math.min(...temperatures);
  }
  getDayName(dateString: string): string {
    const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    return days[dayIndex];
  }

  getIcon(weather: string): string {
    const urlIcon = `${this.base_url}/${weather}@2x.png`;
    return this.iconsServices.getIconUrl(urlIcon);
  }
  getCurrentDate(): string {
    const currentDate = new Date();
    return format(currentDate, 'dd MMM', { locale: es });
  }

  getCurrentTime(): string {
    const currentDate = new Date();
    return currentDate.toLocaleTimeString();
  }

  getDia(): string {
    const days = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ];
    const diaHoy = new Date().getDay();
    return days[diaHoy];
  }

  getFormattedDateTime(dateTimeString: string): string {
    const dateTime = new Date(dateTimeString);
    const day = dateTime.getDate().toString().padStart(2, '0');
    const month = this.getMonthName(dateTime.getMonth());
    const time = dateTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    return `${day} ${month} ${time}`;
  }
  getMonthName(monthIndex: number): string {
    const months = [
      'ene',
      'feb',
      'mar',
      'abr',
      'may',
      'jun',
      'jul',
      'ago',
      'sep',
      'oct',
      'nov',
      'dic',
    ];
    return months[monthIndex];
  }
}
