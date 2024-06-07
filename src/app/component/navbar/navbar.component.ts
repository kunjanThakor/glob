import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterLink } from '@angular/router';
import { AboutmainComponent } from '../aboutmain/aboutmain.component';
import { CampaignComponent } from '../campaign/campaign.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HomeComponent,ContactComponent,RouterLink,AboutmainComponent,CampaignComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
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
}
