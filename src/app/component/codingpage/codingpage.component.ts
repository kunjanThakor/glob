import { Component } from '@angular/core';
import { Codingpage1Component } from '../codingpage1/codingpage1.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-codingpage',
  standalone: true,
  imports: [Codingpage1Component,RouterLink],
  templateUrl: './codingpage.component.html',
  styleUrl: './codingpage.component.css'
})
export class CodingpageComponent {

}
