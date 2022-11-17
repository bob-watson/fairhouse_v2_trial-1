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
    `
      article.listing-details {
        max-width: 1280px
      }
      ul > li {
        font-size: 16pt;
        margin: .7em 0 .7em 0;
        color: rgb(113, 113, 113);
      }
      .listing-features {
        flex-basis: 100%;
      }
      .listing-description {
        display: flex;
        float: left;
      }
      .section-heading {
        font-size: 22pt;
        flex-basis: 100%;
        margin-bottom: .5em;
      }
      .listing-heading {
        font-size: 32pt;
        margin: .5em 0 .5em 0;
      }
      .listing-photo {
        height: 300px;
        width: 300px;
        object-fit: cover;
        border-radius: 10px;
      }
      .listing-apply {
        background: white;
        padding: 1em;
        border: 1px solid rgb(221, 221, 221);
        box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
        border-radius: 10px;
        width: 100%;
        height: fit-content;
        max-width: 40em;
      }
      form {
        display: flex;
        flex-direction: column;
        row-gap: 0.5em;
      }
      label, input {
        display: block;
      }
      input[type="text"], input[type="email"] {
        font-size: 14pt;
        border: 1px solid rgb(221, 221, 221);
        border-radius: .1em;
        padding: 10px;
      }
    `
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
