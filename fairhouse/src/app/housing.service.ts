import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  urlRoot = 'http://127.0.0.1:8000';

  getAllHousingLocations(): Promise<HousingLocation[]> {
    return fetch(`${this.urlRoot}/housingLocations`)
      .then(response => response.json())
      .then<HousingLocation[]>(data => {
        if (!data) return [];

        return data;
      });
  }


  getHousingLocationById(id: number): Promise<HousingLocation> {
    let url = this.urlRoot + 'housingLocations';

    return fetch(`${this.urlRoot}/housingLocations/${id}`)
      .then(response => response.json())
      .then<HousingLocation>(data => {
        if (!data) return {};

        return data;
      });
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Fairhouse application recieved: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

  constructor() { }
}
