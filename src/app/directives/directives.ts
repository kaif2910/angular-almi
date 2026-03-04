import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.html',
  styleUrls: ['./directives.css']
})
export class DirectivesComponent {
  isGridView: boolean = false;
  projects = [
    { name: 'Cloud Migration', progress: 85, status: 'Active' },
    { name: 'Security Audit', progress: 15, status: 'Pending' },
    { name: 'API Integration', progress: 50, status: 'Active' },
    { name: 'Legacy Cleanup', progress: 100, status: 'Completed' }
  ];

  toggleView() {
    this.isGridView = !this.isGridView;
  }
}
