import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      housing-location works!
    </p>
  `,
  styles: [
  ]
})
export class HousingLocationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
