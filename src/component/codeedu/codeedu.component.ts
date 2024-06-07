import { Component } from '@angular/core';
import { Codeedu1Component } from '../codeedu1/codeedu1.component';
import { Codeedu2Component } from '../codeedu2/codeedu2.component';
import { Codeedu3Component } from '../codeedu3/codeedu3.component';
import { Codeedu4Component } from '../codeedu4/codeedu4.component';
import { RouterLink } from '@angular/router';
import { CodeeduheadComponent } from '../codeeduhead/codeeduhead.component';

@Component({
  selector: 'app-codeedu',
  standalone: true,
  imports: [RouterLink,Codeedu1Component,Codeedu2Component,Codeedu3Component,Codeedu4Component,CodeeduheadComponent],
  templateUrl: './codeedu.component.html',
  styleUrl: './codeedu.component.css'
})
export class CodeeduComponent {

}
