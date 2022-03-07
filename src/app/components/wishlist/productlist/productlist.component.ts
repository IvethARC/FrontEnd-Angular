import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../../models/product';
//import { WishlistService } from '../../../services/wish-list.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})

export class ProductlistComponent implements OnInit {

  productList:Product[]= []
  //wishlist: number[] = []

  constructor(
    private productService: ProductService,
    //private wishlistService: WishlistService
    ) { }

  ngOnInit() {
    this.loadProducts();
    //this.loadWishlist();

  }

  loadProducts(){
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    })

  }
/*
  loadWishlist() {
    this.wishlistService.getWishlist().subscribe(productIds => {
      this.wishlist = productIds
    })
  }*/
  

}
