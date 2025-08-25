import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForOf, NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-fetch-data',
  standalone: true,
  imports: [NgIf, MatTableModule],
  templateUrl: './fetch-data.component.html',
  styleUrl: './fetch-data.component.css'
})
export class FetchDataComponent implements OnInit{
  private http?: HttpClient; // Marked as optional
  weatherData: any[] = [];
  displayedColumns: string[] = ['date', 'temperatureC', 'temperatureF', 'summary'];
  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.GetWeatherForecast();
  }

  GetWeatherForecast() {
    this.http?.get<any[]>('api/weatherforecast').subscribe(data => { // Added optional chaining
      console.log(data);
      this.weatherData = data;
    });
  }
}
