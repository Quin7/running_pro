import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDetailComponent } from './components/pages/home/food-detail/food-detail.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'food/:id', component: FoodDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
