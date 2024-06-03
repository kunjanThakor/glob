import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DonationComponent } from '../donation/donation.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, DonationComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
