import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model'
import { CarService } from '../car.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [CarService]
})
export class AdminComponent implements OnInit {

  constructor(private carService: CarService) { }

  ngOnInit() {
  }



  submitForm(brand: string, model: string, year: number, mileage: number, price: number, image: string ) {
    var newCar: Car = new Car(brand, model, year, mileage, price, image);
    this.carService.addCar(newCar);
  }

}
