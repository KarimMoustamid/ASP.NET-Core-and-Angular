import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgForOf, NgIf} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {FetchDataComponent} from './fetch-data/fetch-data.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf, HomeComponent, FetchDataComponent, NavMenuComponent],
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
