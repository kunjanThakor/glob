import { Component } from '@angular/core';
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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CarouselComponent,FeatureComponent,AboutComponent,ProgramComponent,ChooseComponent,PopularcausesComponent,QuoteComponent,OurteamComponent,VolunteerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
