import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Contact1Component } from '../contact1/contact1.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink,Contact1Component],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
