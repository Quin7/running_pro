import { Injectable } from '@angular/core';
import { Food } from '../models/Food';
import { foods_list } from '../../data/food-data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoods():Food[]{    // Getting all the foods
    return foods_list;
  }
  getAllFoodsBySearchTerm(searchTerm:string){   // Getting foods by search term
    return this.getAllFoods()
    .filter(food => food.name.toLowerCase()
    .includes(searchTerm.toLowerCase()))
  }

  getFoodById(foodId:string):Food{
    return this.getAllFoods().find(food => food.id == foodId) ?? new Food();
  }
}
