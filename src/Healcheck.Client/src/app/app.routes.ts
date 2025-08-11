/**
 * 🚀 STANDALONE ROUTING CONFIGURATION
 * 
 * Routes configuration works the same in both approaches.
 * The difference is in how it's provided:
 * - Standalone: provideRouter(routes) in app.config.ts
 * - Module: RouterModule.forRoot(routes) in AppModule
 */

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'fetch-data', component: FetchDataComponent },
];
