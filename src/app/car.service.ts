import { Injectable } from '@angular/core';
import { Car } from './car.model';
import { CARS } from './mock-albums';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CarService {
  cars: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.cars = database.list('cars');
  }

  getCars() {
    return this.cars;
  }

  addCar(newCar: Car) {
    this.cars.push(newCar);
  }

  getCarById(carId: string) {
    return this.database.object('cars/' + carId)
  }
}
