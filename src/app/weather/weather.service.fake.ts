import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { ICurrentWeather } from '../interfaces'
import { IWeatherService } from '../weather/weather.service'

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Bursa',
    country: 'TR',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'light intensity drizzle',
  }
  constructor() {
    var o: Observable<ICurrentWeather>
  }

  public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(this.fakeWeather)
  }
}
