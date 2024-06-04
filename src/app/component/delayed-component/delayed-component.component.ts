import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DonationComponent } from '../donation/donation.component';

@Component({
  selector: 'app-delayed-component',
  standalone: true,
  imports: [NgClass, NgStyle, NgIf, RouterLink, DonationComponent],
  templateUrl: './delayed-component.component.html',
  styleUrl: './delayed-component.component.css'
})
export class DelayedComponentComponent {
  showModal: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.showModal = true;
    }, 3000); // Show modal after 10 seconds
  }

  closeModal() {
    this.showModal = false;
  }

  donate() {
    window.location.href = 'https://www.yourdonationpage.com'; // Replace with your donation link
  }
}
