import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [CarService]
})

export class MarketplaceComponent implements OnInit {
  cars: FirebaseListObservable<any[]>;

  constructor(private router: Router, private carService: CarService) { }

  ngOnInit() {
    this.cars = this.carService.getCars();
  }

  goToDetailPage(clickedCar) {
    this.router.navigate(['cars', clickedCar.$key]);
  };
}
