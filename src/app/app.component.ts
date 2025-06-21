import { Component, OnInit, OnDestroy } from '@angular/core';
import { AboutComponent } from "./about/about.component";
import { ButtonModule } from "primeng/button";
import { CommonModule } from '@angular/common';
import { SideBarComponent } from "./side-bar/side-bar.component";
import { SkillsComponent } from "./skills/skills.component";

@Component({
  selector: 'app-root',
  imports: [AboutComponent, ButtonModule, CommonModule, SideBarComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'peronal-portfolio';
  sidebarVisible = true;

  ngOnInit() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }

  private lastIsSmallScreen = window.innerWidth < 768;

  handleResize = () => {
    const isSmallScreen = window.innerWidth < 768;
    if (isSmallScreen !== this.lastIsSmallScreen) {
      this.sidebarVisible = !isSmallScreen;
      this.lastIsSmallScreen = isSmallScreen;
    }
  };

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
  get isSmallScreen(): boolean {
    return window.innerWidth < 768;
  }
}
