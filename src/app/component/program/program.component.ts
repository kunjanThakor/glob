import { Component } from '@angular/core';
import { CodingpageComponent } from '../codingpage/codingpage.component';
import { CodingeducationComponent } from '../codingeducation/codingeducation.component';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [CodingpageComponent,CodingeducationComponent],
  templateUrl: './program.component.html',
  styleUrl: './program.component.css'
})
export class ProgramComponent {

}
