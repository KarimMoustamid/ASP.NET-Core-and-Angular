/**
 * 🚀 STANDALONE APPLICATION BOOTSTRAP
 * 
 * This is how we bootstrap a standalone Angular application.
 * Key differences from module approach:
 * - Uses bootstrapApplication() instead of bootstrapModule()
 * - Takes the root component and configuration directly
 * - No AppModule required
 */

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
