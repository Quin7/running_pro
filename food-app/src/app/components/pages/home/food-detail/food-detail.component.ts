import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/shared/models/Food';
import { FoodService } from 'src/app/shared/services/food.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {

  food!: Food;

  constructor(private _food:FoodService, activate_route:ActivatedRoute) {
    activate_route.params.subscribe((params) => {
      if(params.id)
      this.food = _food.getFoodById(params.id)
    })
   }

  ngOnInit(): void {

  }

  addToCart(){

  }

}
