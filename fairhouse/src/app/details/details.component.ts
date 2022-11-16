import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works!
      ID  = {{this.housingLocationId}}
    </p>
  `,
  styles: [
  ]
})
export class DetailsComponent implements OnInit {

  private route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId: number = 0;

  constructor() { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.housingLocationId = Number(routeParams.get('id'));
  }

}
