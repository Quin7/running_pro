import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/pages/search/search.component';
import { FoodDetailComponent } from './components/pages/home/food-detail/food-detail.component';
import { RatingModule } from 'ng-starrating';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FoodDetailComponent,
    CartPageComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
