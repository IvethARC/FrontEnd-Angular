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

  public productList:Product[]= [];
  //wishlist: number[] = []

  constructor(
    private productService: ProductService,
    //private wishlistService: WishlistService
    ) { }

  ngOnInit() {
    this.loadProducts();
    //this.loadWishlist();

  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      console.log('Productos recibidos:', products);
      this.productList = products;
    }, (error) => {
      console.error('Error al obtener productos:', error);
    });
  }
  
/*
  loadWishlist() {
    this.wishlistService.getWishlist().subscribe(productIds => {
      this.wishlist = productIds
    })
  }*/
  

}
