import { Component } from '@angular/core';
import { AboutComponent } from "./about/about.component";
import { ButtonModule } from "primeng/button";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [AboutComponent, ButtonModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'peronal-portfolio';
  sidebarVisible = true;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
  get isSmallScreen(): boolean {
    return window.innerWidth < 768;
  }
}
