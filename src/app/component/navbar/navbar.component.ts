import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterLink, RouterModule } from '@angular/router';
import { AboutmainComponent } from '../aboutmain/aboutmain.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HomeComponent, ContactComponent, GalleryComponent, RouterLink, AboutmainComponent, RouterModule, ContactComponent, LoginComponent, RegistrationComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
