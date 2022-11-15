import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
  <article class="listing">
    <img class="listing-photo">
    <h1 class="listing-heading">{{housingLocation.name}}</h1>
    <p class="listing-location">{{housingLocation.city}}, {{housingLocation.state}}</p>
   </article>`,
  styles: [
    `.listing {
      margin: .5em 2em 4em 0;
    }`,
    `.listing-heading {
      font-size: 18pt;
      width: 98%;
      height: 60px;
    }`,

    `.listing-location {
      color: gray;
    }`,

    `.listing-photo {
      height: 300px;
      width: 300px;
      object-fit: cover;
      border-radius: 10px;
    }`
  ]
})
export class HousingLocationComponent implements OnInit {

  @Input() housingLocation!: HousingLocation;

  constructor() { }

  ngOnInit(): void {
  }

}
