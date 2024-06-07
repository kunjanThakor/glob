import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { TopbarComponent } from '../topbar/topbar.component';
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a

@Component({
  selector: 'app-maincompaign',
  standalone: true,
<<<<<<< HEAD
  imports: [],
=======
  imports: [RouterOutlet, NavbarComponent, FooterComponent, TopbarComponent],
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a
  templateUrl: './maincompaign.component.html',
  styleUrl: './maincompaign.component.css'
})
export class MaincompaignComponent {

}
