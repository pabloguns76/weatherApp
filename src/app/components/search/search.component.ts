import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  city: string = '';

  @Output() searchCity: EventEmitter<string> = new EventEmitter<string>();

  onSubmit() {
    if (this.city.trim() !== '') {
      this.searchCity.emit(this.city);
      console.log(this.city)
    }
  }
}
