import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-participent-main',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink, CommonModule],
  templateUrl: './participent-main.component.html',
  styleUrl: './participent-main.component.css'
})
export class ParticipentMainComponent {
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  isToggled: boolean = false;

  toggleSidebar() {
    this.isToggled = !this.isToggled;
  }
}
