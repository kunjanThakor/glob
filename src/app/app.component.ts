import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
=======
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { TopbarComponent } from './component/topbar/topbar.component';
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, NavbarComponent, FooterComponent, RouterModule, ContactComponent, LoginComponent, RegistrationComponent],
=======
  imports: [RouterOutlet,NavbarComponent,FooterComponent,TopbarComponent],
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'glob';
}
