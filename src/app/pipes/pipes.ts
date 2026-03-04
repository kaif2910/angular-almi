import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes.html',
  styleUrls: ['./pipes.css']
})
export class PipesComponent {
  reportTitle: string = 'Q1 internal expense audit';
  generationDate: Date = new Date();
  allocatedBudget: number = 450000;
  spendingRate: number = 0.625;
  
  auditLog = {
    reviewer: 'Audit Dept',
    status: 'Verified',
    compliance: 'Standard'
  };

  asyncData = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Monthly Financial Audit successfully verified by system.');
    }, 2000);
  });
}
