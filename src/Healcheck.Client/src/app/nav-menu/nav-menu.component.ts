import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * 🚀 STANDALONE NAVIGATION COMPONENT
 * 
 * This component demonstrates:
 * - Standalone component with routing dependencies
 * - Direct import of RouterLink directive
 * - No module configuration required
 */
@Component({
  selector: 'app-nav-menu',
  standalone: true,        // 🔑 Standalone component
  imports: [RouterLink],   // 🔑 Direct import of RouterLink directive
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent {
  
  constructor() {
    console.log('NavMenuComponent created using standalone approach');
    console.log('RouterLink imported directly from @angular/router');
  }
}
