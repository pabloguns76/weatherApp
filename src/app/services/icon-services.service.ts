import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconServicesService {

  constructor() { }

  getIconUrl(urlIcon: string): string {
    const map: { [key: string]: string } = {

      'https://openweathermap.org/img/wn/01d@2x.png': './assets/icons/sun.png',
      'https://openweathermap.org/img/wn/02d@2x.png': './assets/icons/sun_cloud.png',
      'https://openweathermap.org/img/wn/03d@2x.png': './assets/icons/cloud.png',
      'https://openweathermap.org/img/wn/04d@2x.png': './assets/icons/broken_clouds.png',
      'https://openweathermap.org/img/wn/09d@2x.png': './assets/icons/cloud_raining.png',
      'https://openweathermap.org/img/wn/10d@2x.png': './assets/icons/sun_raining.png',
      'https://openweathermap.org/img/wn/11d@2x.png': './assets/icons/storm.png',
      'https://openweathermap.org/img/wn/50d@2x.png': './assets/icons/mist.png',

      'https://openweathermap.org/img/wn/01n@2x.png': './assets/icons/night.png',
      'https://openweathermap.org/img/wn/02n@2x.png': './assets/icons/night_cloud.png',
      'https://openweathermap.org/img/wn/03n@2x.png': './assets/icons/cloud.png',
      'https://openweathermap.org/img/wn/04n@2x.png': './assets/icons/broken_clouds.png',
      'https://openweathermap.org/img/wn/09n@2x.png': './assets/icons/cloud_raining.png',
      'https://openweathermap.org/img/wn/10n@2x.png': './assets/icons/night_raining.png',
      'https://openweathermap.org/img/wn/11n@2x.png': './assets/icons/storm.png',
      'https://openweathermap.org/img/wn/50n@2x.png': './assets/icons/mist.png',
    };

    return map[urlIcon] || '';
  }

}
