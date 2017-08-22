import { Injectable } from '@angular/core';
import { Car } from './car.model';
import { CARS } from './mock-albums';

@Injectable()
export class CarService {

  constructor() { }

  getCars() {
    return CARS;
  }

  getCarById(carId: number) {
    for (var i = 0; i <= CARS.length - 1; i++) {
      if (CARS[i].id === carId) {
        return CARS[i];
      }
    }
  }
}
