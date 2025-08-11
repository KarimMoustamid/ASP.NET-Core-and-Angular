# HealcheckClient

This project demonstrates both **Standalone** and **Module-based** approaches in Angular, built with [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## 🏗️ Angular Architecture Approaches

This application showcases two fundamental ways to structure Angular applications:

### 1. 🚀 **Standalone Approach** (Current Implementation - Angular 14+)
The modern, simplified approach that eliminates the need for NgModules in most cases.

### 2. 📦 **Module-based Approach** (Traditional - Available since Angular 2)
The classic approach using NgModules to organize and bootstrap applications.

---

## 🚀 Standalone Approach (Currently Used)

### What is the Standalone Approach?
Introduced in Angular 14 and made stable in Angular 15, standalone components allow you to create Angular components without NgModules. This approach simplifies the development process and reduces boilerplate code.

### Key Features:
- ✅ **No NgModule required** for bootstrapping
- ✅ **Simplified imports** - import dependencies directly in components
- ✅ **Better tree-shaking** and smaller bundle sizes
- ✅ **More explicit dependencies** - clear what each component needs
- ✅ **Easier lazy loading** without feature modules

### Current Implementation Files:

#### **Main Bootstrap** (`src/main.ts`)
```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```

#### **App Configuration** (`src/app/app.config.ts`)
```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ]
};
```

#### **Standalone Component Example** (`src/app/home/home.component.ts`)
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,    // 🔑 Key property for standalone
  imports: [],         // Direct imports instead of module declarations
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Component logic
}
```

---

## 📦 Module-based Approach (Traditional)

### What is the Module-based Approach?
The traditional Angular approach using NgModules to organize application structure, manage dependencies, and configure providers. This has been the standard since Angular 2.

### Key Features:
- ✅ **Well-established pattern** - extensively documented and supported
- ✅ **Clear separation of concerns** - modules organize related functionality
- ✅ **Dependency injection at module level** - centralized provider configuration
- ✅ **Feature modules** - logical grouping of related components/services
- ✅ **Lazy loading with router modules** - well-defined patterns

### Example Implementation (in `module-examples/`):

#### **Module Bootstrap** (`main.ts` - module version)
```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

#### **App Module** (`app.module.ts`)
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { FetchDataComponent } from './fetch-data.component';

@NgModule({
  declarations: [        // Components, directives, pipes
    AppComponent,
    HomeComponent,
    FetchDataComponent,
  ],
  imports: [             // Other modules
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],         // Services and providers
  bootstrap: [AppComponent] // Root component
})
export class AppModule { }
```

#### **Module-based Component Example**
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  // No standalone: true
  // No imports array
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Dependencies injected via module configuration
}
```

### Advantages of Module Approach:
- **Mature ecosystem** - extensive documentation and community knowledge
- **Clear boundaries** - feature modules create logical boundaries
- **Centralized configuration** - all dependencies configured in one place
- **Proven patterns** - well-established architectural patterns

---

## 🔄 Comparison: Standalone vs Module

| Aspect | Standalone Approach | Module Approach |
|--------|-------------------|------------------|
| **Bootstrap** | `bootstrapApplication()` | `bootstrapModule()` |
| **Configuration** | `ApplicationConfig` | `@NgModule` |
| **Component Declaration** | `standalone: true` | `declarations` array |
| **Dependencies** | Direct `imports` in component | Module `imports` |
| **Bundle Size** | Smaller (better tree-shaking) | Larger (module overhead) |
| **Learning Curve** | Easier for beginners | Requires NgModule understanding |
| **Lazy Loading** | Simpler syntax | Requires feature modules |
| **Backwards Compatibility** | Angular 14+ | All Angular versions |
| **Future Direction** | ✅ Recommended by Angular team | ⚠️ Legacy approach |

---

## 🚀 When to Use Each Approach?

### Choose **Standalone Approach** when:
- ✅ Starting a new Angular project (Angular 14+)
- ✅ Want simpler, more intuitive code structure
- ✅ Prefer explicit dependencies in components
- ✅ Need better tree-shaking and smaller bundles
- ✅ Want to follow Angular's future direction

### Choose **Module Approach** when:
- ✅ Working with existing large applications
- ✅ Need complex feature module organization
- ✅ Team is more familiar with NgModules
- ✅ Using older Angular versions (< 14)
- ✅ Migrating gradually from modules to standalone

---

## 💡 Migration Path

### From Modules to Standalone:
1. **Update Angular CLI** to version 14+
2. **Convert components one by one**:
   - Add `standalone: true`
   - Add `imports` array
   - Remove from module `declarations`
3. **Update bootstrap** to use `bootstrapApplication()`
4. **Replace NgModule providers** with `ApplicationConfig`

### Example Migration:
```typescript
// Before (Module-based)
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent { }

// After (Standalone)
@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './example.component.html'
})
export class ExampleComponent { }
```

---

## 📂 Project Structure

```
src/
├── app/
│   ├── home/                          # Standalone component
│   │   ├── home.component.ts          # ✅ standalone: true
│   │   ├── home.component.html
│   │   └── home.component.css
│   ├── fetch-data/                    # Standalone component
│   │   ├── fetch-data.component.ts    # ✅ standalone: true
│   │   └── ...
│   ├── nav-menu/                      # Standalone component
│   │   ├── nav-menu.component.ts      # ✅ standalone: true
│   │   └── ...
│   ├── module-examples/               # 📚 Educational examples
│   │   ├── app.module.example.ts      # How AppModule would look
│   │   ├── home-module.component.ts   # Module-based component example
│   │   └── fetch-data-module.component.ts
│   ├── app.component.ts               # ✅ Root standalone component
│   ├── app.config.ts                 # ✅ Application configuration
│   ├── app.routes.ts                 # ✅ Route configuration
│   └── main.ts                       # ✅ Standalone bootstrap
├── environments/
├── index.html
└── ...
```

---

## 🛠️ Development Commands

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

#### Generate Standalone Component (Recommended)
```bash
ng generate component component-name --standalone
```

#### Generate Traditional Component
```bash
ng generate component component-name --standalone=false
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

---

## 📖 Learning Resources

### Standalone Components
- [Angular Official Guide - Standalone Components](https://angular.dev/guide/components/importing)
- [Angular Blog - Standalone APIs](https://blog.angular.io/angular-v14-is-now-available-391a6db736af)

### NgModules (Traditional)
- [Angular Official Guide - NgModules](https://angular.dev/guide/ngmodules)
- [Angular Architecture - Feature Modules](https://angular.dev/guide/ngmodules/feature-modules)

### Migration Guides
- [Standalone Migration Guide](https://angular.dev/guide/ngmodules/standalone-migration)
- [Angular Update Guide](https://update.angular.io/)

---

## 🤝 Contributing

When contributing to this project:

1. **New components** should use the **standalone approach** by default
2. **Add educational examples** to `module-examples/` if demonstrating traditional patterns
3. **Update documentation** when adding new architectural examples
4. **Follow the established patterns** shown in existing components

---

## 📋 Additional Notes

- This project uses **Angular 19** with **standalone components** as the primary approach
- **Module examples** in `module-examples/` are for educational purposes only
- The application includes **SSR (Server-Side Rendering)** support
- **Hot Module Replacement (HMR)** is configured for faster development
