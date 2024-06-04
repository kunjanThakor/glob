import { Component } from '@angular/core';
import { AboutmainComponent } from '../aboutmain/aboutmain.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutmainComponent,RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
