import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-fetch-data',
  imports: [NgIf, NgForOf],
  templateUrl: './fetch-data.component.html',
  styleUrl: './fetch-data.component.css'
})
export class FetchDataComponent implements OnInit{
  private http?: HttpClient; // Marked as optional
  weatherData: any[] = [];
  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.GetWeatherForecast();
  }

  GetWeatherForecast() {
    this.http?.get<any[]>('/api/weatherforecast').subscribe(data => { // Added optional chaining
      console.log(data);
      this.weatherData = data;
    });
  }
}
