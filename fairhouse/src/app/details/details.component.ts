import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
  <section class="listing-description">
    <section class="listing-features">
      <h2 class="listing-heading">{{this.housingLocationDetails?.name}}</h2>
      <img class="listing-photo" [src]="housingLocationDetails?.photo" alt="external photo of {{housingLocationDetails?.name}}">
      <ul>
        <li>Units available: {{this.housingLocationDetails?.availableUnits}}</li>
        <li>Has WiFi:&nbsp;
          <span *ngIf="this.housingLocationDetails?.wifi; else noWiFi">Yes</span>
          <ng-template #noWiFi>No</ng-template>
        </li>
        <li>Has laundry:&nbsp;
          <span *ngIf="this.housingLocationDetails?.laundry; else noLaundry">Yes</span>
          <ng-template #noLaundry>No</ng-template>
        </li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply to live here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label id="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
  </section>
  `,
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
export class DetailsComponent implements OnInit {

  private route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocationDetails: HousingLocation | undefined;

  housingLocationId: number = 0;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() { }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.housingLocationId = Number(routeParams.get('id'));

    this.housingLocationDetails = this.housingService.getHousingLocationById(this.housingLocationId);
  }

}
