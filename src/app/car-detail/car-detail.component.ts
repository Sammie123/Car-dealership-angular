import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
  providers: [CarService]
})
export class CarDetailComponent implements OnInit {
  carId: number;
  carToDisplay: Car;

  constructor(private route: ActivatedRoute, private location: Location, private carService: CarService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.carId = parseInt(urlParameters['id']);
    });
    this.carToDisplay = this.carService.getCarById(this.carId);
  }

}
