import { environment } from "src/environments/environment"

export const baseUrl = environment.production ? 'https://api.shopping-cart.com': 'http://localhost:8080'
export const productsUrl = baseUrl + '/api/products'
export const cartUrl = 'http://localhost:3000/cart'
export const wishlistUrl = 'http://localhost:3000/wishlist'