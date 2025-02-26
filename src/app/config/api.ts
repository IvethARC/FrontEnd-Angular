import { environment } from "src/environments/environment";

export const baseUrl = 'https://fakestoreapi.com/';
// //export const baseUrl = environment.production ? 'https://fakestoreapi.com/': 'http://localhost:8080';
export const productsUrl = baseUrl + 'products';
export const cartUrl = 'http://localhost:4200/cart';
export const wishlistUrl = 'http://localhost:4200/wishlist';