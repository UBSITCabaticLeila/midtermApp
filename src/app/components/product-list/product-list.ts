import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.interface';
import { ProductService } from '../../services/productservice';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponents implements OnInit {
  private svc = inject(ProductService);

  displayedItems = signal<Product[]>([]);
  searchQuery: string = '';

  get filteredProducts(): Product[] {
    return this.displayedItems();
  }

  ngOnInit(): void {
    this.displayedItems.set(this.svc.getProducts());
  }

  search(): void {
    this.displayedItems.set(this.svc.search(this.searchQuery));
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.svc.delete(id);
      this.displayedItems.set(this.svc.getProducts());
    }
  }
}