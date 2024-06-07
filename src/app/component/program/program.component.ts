import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { CodingpageComponent } from '../codingpage/codingpage.component';
import { CodingeducationComponent } from '../codingeducation/codingeducation.component';
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a

@Component({
  selector: 'app-program',
  standalone: true,
<<<<<<< HEAD
  imports: [],
=======
  imports: [CodingpageComponent,CodingeducationComponent],
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a
  templateUrl: './program.component.html',
  styleUrl: './program.component.css'
})
export class ProgramComponent {

}
