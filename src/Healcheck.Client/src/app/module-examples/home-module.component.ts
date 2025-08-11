/**
 * EXAMPLE: Module-based Home Component
 * 
 * This demonstrates how the HomeComponent would be structured
 * in a traditional NgModule approach.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-home-module',
  // NOTE: No 'standalone: true' property
  // NOTE: No 'imports' array - dependencies handled by module
  template: `
    <div class="home-container">
      <h1>Welcome to Health Check (Module Version)</h1>
      <p>This is an example of a component built using the traditional NgModule approach.</p>
      
      <div class="feature-comparison">
        <h2>Module-based Component Features:</h2>
        <ul>
          <li>✅ Declared in NgModule's declarations array</li>
          <li>✅ Dependencies managed by parent module</li>
          <li>✅ Shared services through module providers</li>
          <li>✅ Traditional approach - stable and well-documented</li>
        </ul>
      </div>

      <div class="comparison-note">
        <p><strong>Note:</strong> Compare this with the standalone version in <code>../home/home.component.ts</code></p>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .feature-comparison {
      background-color: #f5f5f5;
      padding: 15px;
      border-radius: 8px;
      margin: 20px 0;
    }
    
    .comparison-note {
      background-color: #e3f2fd;
      padding: 10px;
      border-left: 4px solid #2196f3;
      margin-top: 20px;
    }
    
    ul {
      margin: 10px 0;
    }
    
    li {
      margin: 5px 0;
    }
  `]
})
export class HomeModuleComponent {
  constructor() {
    console.log('HomeModuleComponent created using traditional NgModule approach');
  }
}

/**
 * How this component would be used in AppModule:
 * 
 * @NgModule({
 *   declarations: [
 *     HomeModuleComponent,  // Must be declared here
 *     // ... other components
 *   ],
 *   // ...
 * })
 * export class AppModule { }
 */