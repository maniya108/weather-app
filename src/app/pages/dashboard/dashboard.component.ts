import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

import { WeatherService } from './../../sevices/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  weatherAppForm!: FormGroup;
  cities = ['', 'Birmingham', 'London', 'Cardiff'];
  weatherList: any = [];
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.weatherAppForm = this.formBuilder.group({
      city: '',
    });
  }

  onCitySelectionChange(event: MatSelectChange): void {
    if (event.value) {
      this.weatherService
        .getForecast(event.value)
        .subscribe((res: Array<any>) => {
          this.weatherList = res;
          console.log(res);
        });
    }
  }
}
