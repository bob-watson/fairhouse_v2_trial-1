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
    <app-housing-location [housingLocation]="this.houseList[1]"></app-housing-location>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  houseList : HousingLocation[];

  constructor() {
    this.houseList = [
      {
        id: 9999,
        name: "Test Home 1",
        city: "Test city 1",
        state: "ST-1",
        photo: "photo URL 1 goes here",
        availableUnits: 99,
        wifi: true,
        laundry: false,
      },
      {
        id: 8888,
        name: "Test Home 2",
        city: "Test city 2",
        state: "ST-2",
        photo: "photo URL 2 goes here",
        availableUnits: 88,
        wifi: false,
        laundry: true,
      }
    ];
  }

  ngOnInit(): void {
  }

}
