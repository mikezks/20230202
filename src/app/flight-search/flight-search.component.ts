import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiCommonModule } from 'ui-common';
import { Flight } from '../entities/flight';
import { FlightCardComponent } from '../flight-card/flight-card.component';

@Component({
  standalone: true,
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  hostDirectives: [],
  imports: [CommonModule, FormsModule, FlightCardComponent, UiCommonModule],
})
export class FlightSearchComponent {
  from = 'Hamburg';
  to = 'Graz';
  flights: Flight[] = [];
  #http = inject(HttpClient);
  basket: Record<number, boolean> = {
    3: true,
    5: true,
  };

  // constructor(private http: HttpClient) {}

  search(): void {
    const url = 'https://demo.angulararchitects.io/api/flight';

    const params = new HttpParams().set('from', this.from).set('to', this.to);

    this.#http
      .get<Flight[]>(url, { params })
      .subscribe((flights) => (this.flights = flights));
  }
}
