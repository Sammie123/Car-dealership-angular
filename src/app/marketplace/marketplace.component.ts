import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { Router } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [CarService]
})

export class MarketplaceComponent implements OnInit {
  cars: Car[];

  constructor(private router: Router, private carService: CarService) { }

  ngOnInit() {
    this.cars = this.carService.getCars();
  }

  goToDetailPage(clickedCar: Car) {
    this.router.navigate(['cars', clickedCar.id]);
  };
}
