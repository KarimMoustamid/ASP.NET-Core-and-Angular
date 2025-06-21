import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, NgForOf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Fixed property name
})
export class AppComponent implements OnInit {
  private http?: HttpClient; // Marked as optional
  title = 'Healcheck.Client';
  weatherData: any[] = [];
  constructor(http: HttpClient) {
    this.http = http; // Assigned in the constructor
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
