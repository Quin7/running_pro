import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/shared/models/Food';
import { CartService } from 'src/app/shared/services/cart.service';
import { FoodService } from 'src/app/shared/services/food.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {

  food!: any;

  constructor(_food:FoodService,
      private cartService:CartService,
      activate_route:ActivatedRoute,
      private router:Router) {
    activate_route.params.subscribe((params) => {
      if(params.id)
      _food.getFoodById(params.id).subscribe((serverFood)=>{
        this.food = serverFood;
      });
    })
   }

  ngOnInit(): void {

  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
