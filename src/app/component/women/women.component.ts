import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Women1Component } from '../women1/women1.component';
import { Women2Component } from '../women2/women2.component';
import { Women3Component } from '../women3/women3.component';
import { Women4Component } from '../women4/women4.component';
import { WomenheadComponent } from '../womenhead/womenhead.component';

@Component({
  selector: 'app-women',
  standalone: true,
  imports: [RouterLink,Women1Component,Women2Component,Women3Component,Women4Component,WomenheadComponent],
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent {

}
