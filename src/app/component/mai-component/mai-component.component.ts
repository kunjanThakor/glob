import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-mai-component',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, RouterModule, RouterLink, FooterComponent, ContactComponent, LoginComponent, RegistrationComponent, GalleryComponent],
  templateUrl: './mai-component.component.html',
  styleUrl: './mai-component.component.css'
})
export class MaiComponentComponent {
  loadwindow() {
    window.location.reload();
    console.log("loading");
  }
}
