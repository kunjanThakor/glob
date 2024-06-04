import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Campaign2to1Component } from '../campaign2to1/campaign2to1.component';

@Component({
  selector: 'app-campaign2',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './campaign2.component.html',
  styleUrl: './campaign2.component.css'
})
export class Campaign2Component {

}
