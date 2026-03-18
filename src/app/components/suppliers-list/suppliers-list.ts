import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Supplier } from '../../models/supplier.interface';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'app-suppliers-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './suppliers-list.html',
  styleUrl: './suppliers-list.css'
})
export class SuppliersListComponent implements OnInit {
  suppliers: Supplier[] = [];
  selectedSupplier: Supplier | undefined;

  constructor(private supplierService: SupplierService) {}

  ngOnInit(): void {
    this.suppliers = this.supplierService.getSuppliers();
  }

  viewSupplierDetails(id: number): void {
    this.selectedSupplier = { ...this.supplierService.getSupplierById(id)! };
  }

  saveChanges(): void {
    if (this.selectedSupplier) {
      this.supplierService.updateSupplier(this.selectedSupplier);
      this.suppliers = this.supplierService.getSuppliers();
      alert('Supplier updated successfully!');
    }
  }

  goBack(): void {
    this.selectedSupplier = undefined;
  }
}