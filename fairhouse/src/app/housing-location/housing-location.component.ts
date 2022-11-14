import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
  <article class="listing">
    <img class="listing-photo" src="housingLocation.photo" >
    <h1 class="listing-heading"></h1>
    <p class="listing-location"></p>
   </article>`,
  styles: [
  ]
})
export class HousingLocationComponent implements OnInit {

  @Input() housingLocation!: HousingLocation;

  constructor() { }

  ngOnInit(): void {
  }

}
