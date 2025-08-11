/**
 * EXAMPLE: Traditional Angular Module Approach
 * 
 * This file demonstrates how the application would be structured
 * using the traditional NgModule approach instead of standalone components.
 * 
 * Note: This is for demonstration only. The actual app uses standalone components.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Example imports for module-based components
// import { AppComponent } from '../app.component';
// import { HomeComponent } from './home-module.component';
// import { FetchDataComponent } from './fetch-data-module.component';
// import { NavMenuComponent } from './nav-menu-module.component';

/**
 * Example routes configuration for module approach
 */
const moduleRoutes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeModuleComponent },
  // { path: 'fetch-data', component: FetchDataModuleComponent },
];

/**
 * Traditional AppModule Example
 * 
 * In the module approach, all components, directives, pipes, and services
 * need to be declared, imported, or provided at the module level.
 */
@NgModule({
  declarations: [
    // All components must be declared here
    // AppComponent,
    // HomeComponent,
    // FetchDataComponent,
    // NavMenuComponent,
  ],
  imports: [
    // Module dependencies
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(moduleRoutes),
  ],
  providers: [
    // Global services and providers
    // Can also use providedIn: 'root' in service decorator
  ],
  bootstrap: [
    // Root component to bootstrap
    // AppComponent
  ]
})
export class AppModule { }

/**
 * How to bootstrap with modules in main.ts:
 * 
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 * import { AppModule } from './app/app.module';
 * 
 * platformBrowserDynamic()
 *   .bootstrapModule(AppModule)
 *   .catch(err => console.error(err));
 */