import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flight } from '../entities/flight';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
})
export class FlightCardComponent {
  @Input() item?: Flight;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  toggleSelection(): void {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
