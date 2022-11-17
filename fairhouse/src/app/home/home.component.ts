import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
    <section>
    <input type="text" placeholder="Filter by city" #filter>
      <button type="button" class="primary" (click)="filterResults(filter.value)">Search</button>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let thisLocation of this.filteredHouseList"
        [housingLocation]="thisLocation">
      </app-housing-location>
    </section>
  `,
  styles: [
    `input, button {
      font-size: 18pt;
      width: 60%;
      padding: 8px;
      border-radius: 10px;
      border: solid .05em #4468e8
    }`,
    `button {
      margin-left: .2em;
      width: auto;
    }`,
    `.results {
      display: flex;
      flex-wrap: wrap;
      margin-top: 4em;
    }`
  ]
})
export class HomeComponent implements OnInit {

  housingService = inject(HousingService);
  houseList: HousingLocation[] = [];
  filteredHouseList: HousingLocation[] = [];

  constructor() { }

  filterResults(text: string) {
    if (!text) this.filteredHouseList = this.houseList;

    this.filteredHouseList = this.houseList.filter(
      house => house?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  ngOnInit(): void {
    this.housingService.getAllHousingLocations().then(
      (housingLocationList: HousingLocation[]) => {
        this.houseList = housingLocationList;
        this.filteredHouseList = housingLocationList;
      });
  }

}
