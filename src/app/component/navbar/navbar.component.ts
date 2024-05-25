import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterLink } from '@angular/router';
import { AboutmainComponent } from '../aboutmain/aboutmain.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HomeComponent,ContactComponent,RouterLink,AboutmainComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
