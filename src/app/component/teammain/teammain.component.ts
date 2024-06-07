import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TeamComponent } from '../team/team.component';
import { AdvisoryBoardComponent } from '../advisory-board/advisory-board.component';

@Component({
  selector: 'app-teammain',
  standalone: true,
  imports: [RouterLink,TeamComponent,AdvisoryBoardComponent],
  templateUrl: './teammain.component.html',
  styleUrl: './teammain.component.css'
})
export class TeammainComponent {

}
