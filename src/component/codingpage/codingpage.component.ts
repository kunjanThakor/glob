import { Component } from '@angular/core';
import { Codingpage1Component } from '../codingpage1/codingpage1.component';
import { RouterLink } from '@angular/router';
import { Codingpage3Component } from '../codingpage3/codingpage3.component';
import { CodingpageheaderComponent } from '../codingpageheader/codingpageheader.component';
import { Codingpage4Component } from '../codingpage4/codingpage4.component';
import { Codingpage2Component } from '../codingpage2/codingpage2.component';

@Component({
  selector: 'app-codingpage',
  standalone: true,
  imports: [CodingpageheaderComponent,Codingpage1Component,RouterLink,Codingpage2Component,Codingpage3Component,Codingpage4Component],
  templateUrl: './codingpage.component.html',
  styleUrl: './codingpage.component.css'
})
export class CodingpageComponent {

}
