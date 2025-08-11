import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavMenuComponent} from './nav-menu/nav-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavMenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Healcheck.Client';
  constructor() {}
}
