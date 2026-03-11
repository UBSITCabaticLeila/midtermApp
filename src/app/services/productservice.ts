import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  products: Product[] = [
    { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 2499.00, stock: 35, status: 'Available', description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.', brand: 'SoundMax', rating: 4.5, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Running Shoes', category: 'Footwear', price: 3200.00, stock: 0, status: 'Out of Stock', description: 'Lightweight running shoes designed for marathon performance and comfort.', brand: 'SwiftFoot', rating: 4.7, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Mechanical Keyboard', category: 'Electronics', price: 1850.00, stock: 8, status: 'Limited', description: 'Compact TKL mechanical keyboard with RGB backlighting and tactile switches.', brand: 'TypePro', rating: 4.6, imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Yoga Mat', category: 'Sports & Fitness', price: 599.00, stock: 50, status: 'Available', description: 'Non-slip eco-friendly yoga mat with alignment lines for beginners and professionals.', brand: 'ZenFlex', rating: 4.3, imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Stainless Steel Water Bottle', category: 'Kitchen & Dining', price: 450.00, stock: 3, status: 'Limited', description: 'Double-walled insulated water bottle that keeps drinks cold for 24 hours.', brand: 'HydroLife', rating: 4.8, imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Smart Watch', category: 'Electronics', price: 6999.00, stock: 15, status: 'Available', description: 'Feature-rich smartwatch with health tracking, GPS, and 7-day battery life.', brand: 'TechWrist', rating: 4.4, imageUrl: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Backpack 30L', category: 'Bags & Travel', price: 1299.00, stock: 0, status: 'Out of Stock', description: '30-liter waterproof backpack with laptop compartment and ergonomic straps.', brand: 'TrailBear', rating: 4.2, imageUrl: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Bamboo Cutting Board', category: 'Kitchen & Dining', price: 380.00, stock: 60, status: 'Available', description: 'Eco-friendly bamboo cutting board with juice grooves and non-slip feet.', brand: 'GreenChef', rating: 4.1, imageUrl: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Portable Bluetooth Speaker', category: 'Electronics', price: 1750.00, stock: 5, status: 'Limited', description: 'Compact waterproof Bluetooth speaker with 360° surround sound and 12-hour battery.', brand: 'BoomBox', rating: 4.5, imageUrl: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Ceramic Coffee Mug', category: 'Kitchen & Dining', price: 250.00, stock: 100, status: 'Available', description: 'Hand-crafted ceramic coffee mug with a comfortable grip and minimalist design.', brand: 'BrewCo', rating: 4.0, imageUrl: 'https://via.placeholder.com/150' }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  updateProduct(updated: Product): void {
    const idx = this.products.findIndex(p => p.id === updated.id);
    if (idx !== -1) this.products[idx] = { ...updated };
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('auth_token');
  }

  login(): void {
    sessionStorage.setItem('auth_token', 'demo-token');
  }

  logout(): void {
    sessionStorage.removeItem('auth_token');
  }

}