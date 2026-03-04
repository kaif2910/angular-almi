import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-binding.html',
  styleUrls: ['./data-binding.css']
})
export class DataBindingComponent {
  systemName: string = 'Enterprise Node 01';
  lastUpdate: string = new Date().toLocaleTimeString();
  isMainframeDisabled: boolean = true;
  isSecurityEnabled: boolean = false;

  toggleSecurity() {
    this.isSecurityEnabled = !this.isSecurityEnabled;
    this.lastUpdate = new Date().toLocaleTimeString();
  }

  toggleMainframe() {
    this.isMainframeDisabled = !this.isMainframeDisabled;
  }
}
