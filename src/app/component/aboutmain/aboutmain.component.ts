import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AoutheaderComponent } from '../aoutheader/aoutheader.component';
import { WhoAreWeComponent } from '../who-are-we/who-are-we.component';
import { VisionComponent } from '../vision/vision.component';
import { MissionComponent } from '../mission/mission.component';
import { ValuesComponent } from '../values/values.component';
import { ApproachComponent } from '../approach/approach.component';
import { TeamComponent } from '../team/team.component';
import { AdvisoryBoardComponent } from '../advisory-board/advisory-board.component';

@Component({
  selector: 'app-aboutmain',
  standalone: true,
  imports: [RouterLink,AoutheaderComponent,WhoAreWeComponent,VisionComponent,MissionComponent,ValuesComponent,ApproachComponent,TeamComponent,AdvisoryBoardComponent],
  templateUrl: './aboutmain.component.html',
  styleUrl: './aboutmain.component.css'
})
export class AboutmainComponent {

}
