import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Campaign1headComponent } from '../campaign1head/campaign1head.component';
import { Campaign1to2Component } from '../campaign1to2/campaign1to2.component';
import { Campaign1to3Component } from '../campaign1to3/campaign1to3.component';
import { Campaign1to5Component } from '../campaign1to5/campaign1to5.component';
import { Campaign1to4Component } from '../campaign1to4/campaign1to4.component';


@Component({
  selector: 'app-campaign1to1',
  standalone: true,
  imports: [RouterLink,Campaign1headComponent,Campaign1to1Component,Campaign1to2Component,Campaign1to3Component,Campaign1to4Component,Campaign1to5Component],
  templateUrl: './campaign1to1.component.html',
  styleUrl: './campaign1to1.component.css'
})
export class Campaign1to1Component {

}
