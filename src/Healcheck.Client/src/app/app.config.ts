/**
 * 🚀 STANDALONE APPLICATION CONFIGURATION
 * 
 * This replaces the traditional AppModule configuration.
 * All providers that would be in AppModule.providers go here.
 * 
 * Compare with module approach in module-examples/app.module.example.ts
 */

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // 🔑 Zone change detection - equivalent to BrowserModule
    provideZoneChangeDetection({ eventCoalescing: true }), 
    
    // 🔑 Router configuration - equivalent to RouterModule.forRoot()
    provideRouter(routes), 
    
    // 🔑 Client-side hydration for SSR
    provideClientHydration(withEventReplay()),
    
    // 🔑 HTTP client - equivalent to HttpClientModule
    provideHttpClient(withFetch())
  ]
};
