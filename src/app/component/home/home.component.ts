<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a
import { CarouselComponent } from '../carousel/carousel.component';
import { RouterLink } from '@angular/router';
import { FeatureComponent } from '../feature/feature.component';
import { AboutComponent } from '../about/about.component';
import { ProgramComponent } from '../program/program.component';
import { ChooseComponent } from '../choose/choose.component';
import { PopularcausesComponent } from '../popularcauses/popularcauses.component';
import { QuoteComponent } from '../quote/quote.component';
import { OurteamComponent } from '../ourteam/ourteam.component';
import { VolunteerComponent } from '../volunteer/volunteer.component';
<<<<<<< HEAD
import { NgIf } from '@angular/common';
=======
import { NewsComponent } from '../news/news.component';
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a

@Component({
  selector: 'app-home',
  standalone: true,
<<<<<<< HEAD
  imports: [NgIf, RouterLink, CarouselComponent, FeatureComponent, AboutComponent, ProgramComponent, ChooseComponent, PopularcausesComponent, QuoteComponent, OurteamComponent, VolunteerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
=======
  imports: [RouterLink,CarouselComponent,NewsComponent,FeatureComponent,AboutComponent,ProgramComponent,ChooseComponent,PopularcausesComponent,QuoteComponent,OurteamComponent,VolunteerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a
}
