import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Campaign2to2Component } from '../campaign2to2/campaign2to2.component';
import { Campaign2to3Component } from '../campaign2to3/campaign2to3.component';
import { Campaign2to4Component } from '../campaign2to4/campaign2to4.component';
import { Campaign2to5Component } from '../campaign2to5/campaign2to5.component';
import { Campign2headComponent } from '../campign2head/campign2head.component';

@Component({
  selector: 'app-campaign2to1',
  standalone: true,
  imports: [RouterLink,Campaign2to2Component,Campaign2to3Component,Campaign2to4Component,Campaign2to5Component,Campign2headComponent],
  templateUrl: './campaign2to1.component.html',
  styleUrl: './campaign2to1.component.css'
})
export class Campaign2to1Component {

}
