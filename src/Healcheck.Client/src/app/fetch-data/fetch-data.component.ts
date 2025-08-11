import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForOf, NgIf } from '@angular/common';

/**
 * 🚀 STANDALONE COMPONENT WITH DEPENDENCIES
 * 
 * This demonstrates a standalone component that:
 * - Uses HttpClient for API calls (injected normally)
 * - Imports Angular directives directly (NgIf, NgForOf)
 * - No module configuration needed
 */
@Component({
  selector: 'app-fetch-data',
  standalone: true,    // 🔑 Standalone component
  imports: [NgIf, NgForOf], // 🔑 Direct imports of needed directives
  templateUrl: './fetch-data.component.html',
  styleUrl: './fetch-data.component.css'
})
export class FetchDataComponent implements OnInit {
  private http?: HttpClient; // Marked as optional
  weatherData: any[] = [];
  
  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
    console.log('FetchDataComponent created using standalone approach');
    console.log('HttpClient injected from app.config.ts providers');
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
