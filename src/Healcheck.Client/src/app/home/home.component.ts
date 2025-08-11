import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * 🚀 STANDALONE COMPONENT EXAMPLE
 * 
 * This is a standalone component - the modern Angular approach.
 * Key characteristics:
 * - standalone: true (enables standalone mode)
 * - imports: [] (direct dependency imports instead of module declarations)
 * - No NgModule required for this component
 */
@Component({
  selector: 'app-home',
  standalone: true,    // 🔑 This makes it a standalone component
  imports: [RouterLink], // 🔑 Direct imports instead of module dependencies
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor() {
    console.log('HomeComponent created using standalone approach');
  }
}
