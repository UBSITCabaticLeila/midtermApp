import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product.interface';
import { ProductService } from '../services/productservice';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent implements OnInit {
  private svc = inject(ProductService);

  displayedItems = signal<Product[]>([]);
  searchQuery: string = '';
  showAddForm: boolean = false;

  newProduct: Product = this.emptyProduct();

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

  scrollToDetails(): void {
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
    this.newProduct = this.emptyProduct();
  }

  onSave(): void {
    this.newProduct.id = Date.now();
    this.svc.add(this.newProduct);
    this.displayedItems.set(this.svc.getProducts());
    this.showAddForm = false;
    this.newProduct = this.emptyProduct();
  }

  emptyProduct(): Product {
    return {
      id: 0,
      name: '',
      category: '',
      price: 0,
      stock: 0,
      status: 'Available',
      description: '',
      brand: '',
      rating: 0,
      imageUrl: ''
    };
  }
}