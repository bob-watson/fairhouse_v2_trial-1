import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
    <section>
      <input type="text" placeholder="Filter by city">
      <button type="button">Search</button>
    </section>
    <section class="results"></section>
    <app-housing-location housingLocation="this.onlyHouse"></app-housing-location>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  onlyHouse : HousingLocation;

  constructor() {
    this.onlyHouse = {
      id: 9999,
      name: "Test Home",
      city: "Test city",
      state: "ST",
      photo: "photo URL goes here",
      availableUnits: 99,
      wifi: true,
      laundry: false,
    };
  }

  ngOnInit(): void {
  }

}
