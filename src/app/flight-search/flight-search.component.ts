import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Flight } from '../entities/flight';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent {
  from = 'Hamburg';
  to = 'Graz';
  flights: Flight[] = [];
  selectedFlight?: Flight;
  #http = inject(HttpClient);

  // constructor(private http: HttpClient) {}

  search(): void {
    const url = 'https://demo.angulararchitects.io/api/flight';

    const params = new HttpParams().set('from', this.from).set('to', this.to);

    this.#http
      .get<Flight[]>(url, { params })
      .subscribe((flights) => (this.flights = flights));
  }

  select(flight: Flight): void {
    this.selectedFlight = this.selectedFlight === flight ? undefined : flight;
  }
}
