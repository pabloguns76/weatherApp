import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apikey: string = 'ccdf2e837cf93e88c4ec74ad135987da';
  private baseUrl: string = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) { }

  public getForecast(query: string, unit: string = 'metric'): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/forecast?q=${query}&appid=${this.apikey}&units=${unit}`);
  }

  public getCurrentWeather(query: string, unit: string = 'metric'): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/weather?q=${query}&appid=${this.apikey}&units=${unit}`);

  }
}
