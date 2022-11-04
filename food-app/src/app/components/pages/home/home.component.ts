import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from 'src/app/shared/models/Food';
import { FoodService } from 'src/app/shared/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[]=[];
  origins: any;

  constructor(private _foods:FoodService) {
    this.foods = this._foods.getAllFoods();
  }


  ngOnInit(): void {

  }

}
