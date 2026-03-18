import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier.interface';

@Injectable({ providedIn: 'root' })
export class SupplierService {
  private suppliers: Supplier[] = [
    { id: 1, supplierName: 'TechParts Inc.', location: 'Manila', email: 'tech@parts.com', contactPerson: 'Ana Reyes', phone: '09171234567', productsSupplied: ['Keyboards', 'Mice'] },
    { id: 2, supplierName: 'GreenLeaf Co.', location: 'Cebu', email: 'green@leaf.com', contactPerson: 'Ben Santos', phone: '09181234567', productsSupplied: ['Paper', 'Pens'] },
    { id: 3, supplierName: 'IronWorks Ltd.', location: 'Davao', email: 'iron@works.com', contactPerson: 'Carlo Tan', phone: '09191234567', productsSupplied: ['Metal Parts'] },
    { id: 4, supplierName: 'ByteSupply', location: 'Quezon City', email: 'byte@supply.com', contactPerson: 'Diana Cruz', phone: '09201234567', productsSupplied: ['USBs', 'Cables'] },
    { id: 5, supplierName: 'FreshGoods', location: 'Makati', email: 'fresh@goods.com', contactPerson: 'Emil Ramos', phone: '09211234567', productsSupplied: ['Food Items'] },
    { id: 6, supplierName: 'PrintMaster', location: 'Pasig', email: 'print@master.com', contactPerson: 'Faith Lim', phone: '09221234567', productsSupplied: ['Ink', 'Toners'] },
    { id: 7, supplierName: 'SafetyFirst', location: 'Taguig', email: 'safe@first.com', contactPerson: 'Greg Uy', phone: '09231234567', productsSupplied: ['PPE', 'Gloves'] },
    { id: 8, supplierName: 'CloudTech', location: 'Mandaluyong', email: 'cloud@tech.com', contactPerson: 'Hanna Go', phone: '09241234567', productsSupplied: ['Servers', 'Routers'] },
    { id: 9, supplierName: 'EcoSupplies', location: 'Pasay', email: 'eco@supplies.com', contactPerson: 'Ivan Sy', phone: '09251234567', productsSupplied: ['Eco Bags', 'Bottles'] },
    { id: 10, supplierName: 'MegaTools', location: 'Caloocan', email: 'mega@tools.com', contactPerson: 'Jane Dela Cruz', phone: '09261234567', productsSupplied: ['Drills', 'Wrenches'] },
  ];

  getSuppliers(): Supplier[] {
    return this.suppliers;
  }

  getSupplierById(id: number): Supplier | undefined {
    return this.suppliers.find(s => s.id === id);
  }

  updateSupplier(updatedSupplier: Supplier): void {
    const index = this.suppliers.findIndex(s => s.id === updatedSupplier.id);
    if (index !== -1) {
      this.suppliers[index] = { ...updatedSupplier };
    }
  }
}