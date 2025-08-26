import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '10cfbb6e7be037991e30023cfa2f4896';

  constructor(private http: HttpClient) {}

  getWeatherDatas(cityName: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
