import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
<<<<<<< HEAD
import { RouterLink, RouterModule } from '@angular/router';
import { AboutmainComponent } from '../aboutmain/aboutmain.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { GalleryComponent } from '../gallery/gallery.component';
=======
import { ContactComponent } from '../contact/contact.component';
import { RouterLink } from '@angular/router';
import { AboutmainComponent } from '../aboutmain/aboutmain.component';
import { CampaignComponent } from '../campaign/campaign.component';
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a

@Component({
  selector: 'app-navbar',
  standalone: true,
<<<<<<< HEAD
  imports: [HomeComponent, ContactComponent, GalleryComponent, RouterLink, AboutmainComponent, RouterModule, ContactComponent, LoginComponent, RegistrationComponent],
=======
  imports: [HomeComponent,ContactComponent,RouterLink,AboutmainComponent,CampaignComponent],
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
<<<<<<< HEAD
  loadWindow() {
    window.location.reload();
  }

=======
  disable: boolean = true;
  ngOnInit(): void {
    if (typeof localStorage !== 'undefined' &&
      localStorage.getItem('username') !== null &&
      localStorage.getItem('password') !== null) {
      this.disable = false;
    } else {
      this.disable = true;
    }
  }

  openModel() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }
  closeModel() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a
}
