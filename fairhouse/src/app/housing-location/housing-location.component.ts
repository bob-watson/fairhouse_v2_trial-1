import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
  <article class="listing">
    <img class="listing-photo">
    <h1 class="listing-heading"></h1>
    <p class="listing-location"></p>
   </article>`,
  styles: [
  ]
})
export class HousingLocationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
