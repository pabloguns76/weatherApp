import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherServicesService {

  apikey = 'ccdf2e837cf93e88c4ec74ad135987da';


  constructor() { }
}
