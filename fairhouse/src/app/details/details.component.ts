import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works!
      ID  = {{this.housingLocationId}}
    </p>
    <code> {{this.housingLocationDetails  | json }}</code>
  `,
  styles: [
  ]
})
export class DetailsComponent implements OnInit {

  private route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocationDetails: HousingLocation | undefined;

  housingLocationId: number = 0;

  constructor() { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.housingLocationId = Number(routeParams.get('id'));

    this.housingLocationDetails = this.housingService.getHousingLocationById(this.housingLocationId);
  }

}
