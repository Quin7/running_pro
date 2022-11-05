import { Injectable } from '@angular/core';
import { Food } from '../models/Food';
import { foods_list } from '../../data/food-data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoods():Food[]{
    return foods_list;
  }
  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAllFoods()
    .filter(food => food.name.toLowerCase()
    .includes(searchTerm.toLowerCase()))
  }
}
