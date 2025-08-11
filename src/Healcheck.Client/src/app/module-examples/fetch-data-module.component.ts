/**
 * EXAMPLE: Module-based Data Fetching Component
 * 
 * This demonstrates how data fetching would work in a traditional
 * NgModule approach, including dependency injection.
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data-module',
  // NOTE: No 'standalone: true' property
  // NOTE: No 'imports' array - CommonModule provided by BrowserModule in AppModule
  template: `
    <div class="fetch-data-container">
      <h1>Weather Forecast (Module Version)</h1>
      <p>This component demonstrates data fetching using the traditional NgModule approach.</p>
      
      <div class="loading" *ngIf="loading">
        Loading weather data...
      </div>
      
      <div class="error" *ngIf="error">
        <p>Error loading data: {{ error }}</p>
        <p><em>Note: This is expected when API server is not running</em></p>
      </div>
      
      <div class="weather-data" *ngIf="!loading && !error && weatherData.length > 0">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Temp. (C)</th>
              <th>Temp. (F)</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let forecast of weatherData">
              <td>{{ forecast.date | date }}</td>
              <td>{{ forecast.temperatureC }}</td>
              <td>{{ forecast.temperatureF }}</td>
              <td>{{ forecast.summary }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="module-info">
        <h3>Module Approach Characteristics:</h3>
        <ul>
          <li>HttpClient injected via module's imports (HttpClientModule)</li>
          <li>CommonModule directives (ngIf, ngFor) available via BrowserModule</li>
          <li>DatePipe available through CommonModule</li>
          <li>No direct imports needed in component</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .fetch-data-container {
      padding: 20px;
      max-width: 1000px;
      margin: 0 auto;
    }
    
    .loading, .error {
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
    }
    
    .loading {
      background-color: #fff3cd;
      border: 1px solid #ffeaa7;
    }
    
    .error {
      background-color: #f8d7da;
      border: 1px solid #f5c6cb;
      color: #721c24;
    }
    
    .table {
      width: 100%;
      margin-bottom: 1rem;
      color: #212529;
      border-collapse: collapse;
    }
    
    .table th, .table td {
      padding: 0.75rem;
      vertical-align: top;
      border-top: 1px solid #dee2e6;
    }
    
    .table thead th {
      vertical-align: bottom;
      border-bottom: 2px solid #dee2e6;
      background-color: #f8f9fa;
    }
    
    .table-striped tbody tr:nth-of-type(odd) {
      background-color: rgba(0, 0, 0, 0.05);
    }
    
    .module-info {
      background-color: #e8f5e8;
      padding: 15px;
      border-radius: 8px;
      margin-top: 20px;
    }
    
    .module-info ul {
      margin: 10px 0;
    }
  `]
})
export class FetchDataModuleComponent implements OnInit {
  weatherData: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private http: HttpClient) {
    console.log('FetchDataModuleComponent created using traditional NgModule approach');
    console.log('HttpClient injected via AppModule imports');
  }

  ngOnInit(): void {
    this.loadWeatherData();
  }

  private loadWeatherData(): void {
    this.loading = true;
    this.error = null;
    
    // In a real app, this would fetch from the API
    // For demo purposes, we'll simulate data or an error
    setTimeout(() => {
      this.loading = false;
      
      // Simulate API error (since backend likely not running)
      this.error = 'Cannot connect to /api/weatherforecast endpoint';
      
      // Uncomment below to simulate successful data loading:
      /*
      this.weatherData = [
        {
          date: new Date(),
          temperatureC: 22,
          temperatureF: 72,
          summary: 'Warm'
        },
        {
          date: new Date(Date.now() + 86400000),
          temperatureC: 18,
          temperatureF: 65,
          summary: 'Cool'
        }
      ];
      */
    }, 1000);
  }
}

/**
 * Module configuration needed:
 * 
 * @NgModule({
 *   declarations: [
 *     FetchDataModuleComponent,
 *   ],
 *   imports: [
 *     BrowserModule,      // Provides CommonModule (ngIf, ngFor, pipes)
 *     HttpClientModule,   // Provides HttpClient for injection
 *   ],
 * })
 */