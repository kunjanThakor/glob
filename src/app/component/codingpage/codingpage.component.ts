import { Component } from '@angular/core';
import { Codingpage1Component } from '../codingpage1/codingpage1.component';
import { RouterLink } from '@angular/router';
<<<<<<< HEAD
=======
import { Codingpage2Component } from '../codingpage2/codingpage2.component';
import { Codingpage3Component } from '../codingpage3/codingpage3.component';
import { CodingpageheaderComponent } from '../codingpageheader/codingpageheader.component';
import { Codingpage4Component } from '../codingpage4/codingpage4.component';
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a

@Component({
  selector: 'app-codingpage',
  standalone: true,
<<<<<<< HEAD
  imports: [Codingpage1Component,RouterLink],
=======
  imports: [CodingpageheaderComponent,Codingpage1Component,RouterLink,Codingpage2Component,Codingpage3Component,Codingpage4Component],
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a
  templateUrl: './codingpage.component.html',
  styleUrl: './codingpage.component.css'
})
export class CodingpageComponent {

}
