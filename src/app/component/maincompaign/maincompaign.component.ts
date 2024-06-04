import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
  selector: 'app-maincompaign',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, TopbarComponent],
  templateUrl: './maincompaign.component.html',
  styleUrl: './maincompaign.component.css'
})
export class MaincompaignComponent {

}
