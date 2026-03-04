import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  // 1. Interpolation (Prac 3)
  appName = 'StockMaster Pro';
  systemStatus = 'Online';
  lastUpdated = new Date();

  // 2. Data for Directives (Prac 5)
  inventory = [
    { id: 'ITM-001', name: 'Dell Wireless Mouse', price: 750, stock: 45, category: 'Hardware' },
    { id: 'ITM-002', name: 'Mechanical Keyboard', price: 2500, stock: 5, category: 'Hardware' },
    { id: 'ITM-003', name: 'USB-C Adapters', price: 499, stock: 0, category: 'Accessories' },
    { id: 'ITM-004', name: '27" IPS Monitor', price: 12500, stock: 12, category: 'Displays' }
  ];

  // 3. Property Binding (Prac 4)
  isTableVisible = true;

  // 4. Event Binding Methods (Prac 4)
  toggleTable() {
    this.isTableVisible = !this.isTableVisible;
  }

  issueItem(item: any) {
    if (item.stock > 0) {
      item.stock--;
      this.lastUpdated = new Date();
    }
  }

  restockItem(item: any) {
    item.stock += 10;
    this.lastUpdated = new Date();
  }
}
