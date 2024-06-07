import { Component } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mainhome',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, TopbarComponent],
  templateUrl: './mainhome.component.html',
  styleUrl: './mainhome.component.css'
})
export class MainhomeComponent {

}
