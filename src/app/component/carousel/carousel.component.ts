import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DonationComponent } from '../donation/donation.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [RouterLink, DonationComponent, NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

}
