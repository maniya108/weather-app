import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private readonly httpClient: HttpClient) {}

  getForecast(city: string): Observable<any> {
    const baseWeatherURL =
      'https://api.openweathermap.org/data/2.5/forecast?q=';
    const urlSuffix = '&units=metric&appid=fe3695759da76e0c9dcaf566634a08ed';
    return this.httpClient
      .get<any>(`${baseWeatherURL}${city}${urlSuffix}`)
      .pipe(
        shareReplay(1)
        // map((res) => {
        //   if (res?.list?.length) {
        //     return res?.list.reduce(
        //       (days: { [x: string]: any }, row: { dt_txt: string }) => {
        //         const date = row.dt_txt.split(' ')[0];
        //         days[date] = [...(days[date] ? days[date] : []), row];
        //         return days;
        //       },
        //       {}
        //     );
        //   }
        //   return [];
        // }),
        // map((res) =>
        //   Object.values(res).map((value: any) => {
        //     if (value?.length === 0) {
        //       return [];
        //     }
        //     const result = value[0];
        //     result.details = value;
        //     return result;
        //   })
        // )
      );
  }
}
