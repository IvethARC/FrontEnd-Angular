import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShoppingCartComponent } from './components/wishlist/shopping-cart.component';
import { FiltersComponent } from './components/wishlist/filters/filters.component';
import { ProductlistComponent } from './components/wishlist/productlist/productlist.component';
import { CartComponent } from './components/wishlist/cart/cart.component';
import { CartItemComponent } from './components/wishlist/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/wishlist/productlist/product-item/product-item.component';
import {NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductlistComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent
  ],

  schemas: [ NO_ERRORS_SCHEMA],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
