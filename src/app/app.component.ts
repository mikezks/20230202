import { Component, inject } from '@angular/core';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { injectLazyStylesLoader } from './lazy-styles';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, FlightSearchComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello Angular!';
  lazyLoadStyles = injectLazyStylesLoader();

  switchTitle(): void {
    this.title = 'My new title! :)';
  }
}
