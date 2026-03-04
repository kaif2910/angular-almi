import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  template: `
    <div class="welcome-box">
      <h2>Welcome to the Admin Dashboard</h2>
      <p class="status">{{ statusMessage }}</p>
      <div class="stats">
        <div class="stat-item">
          <strong>99.9%</strong>
          <span>Uptime</span>
        </div>
        <div class="stat-item">
          <strong>24/7</strong>
          <span>Support</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .welcome-box { text-align: left; }
    h2 { color: #2d3748; margin-top: 0; }
    .status { color: #48bb78; font-weight: bold; margin-bottom: 20px; }
    .stats { display: flex; gap: 30px; margin-top: 20px; }
    .stat-item { display: flex; flex-direction: column; }
    .stat-item strong { font-size: 1.5rem; color: #2d3748; }
    .stat-item span { color: #718096; font-size: 0.8rem; }
  `]
})
export class HelloComponent {
  statusMessage: string = 'System Operational: All services are running normally.';
}
