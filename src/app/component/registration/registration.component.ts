import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Participant } from '../../participant';
import { ParticipantService } from '../../participant.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {

  particpiant: Participant = {
    name: '',
    email: '',
    password: '',
    contact: '',
    roles: ["Select Role"],
    enabled: false
  }

  constructor(private particpentService: ParticipantService) { }
  ngOnInit(): void {
  }
  onSubmit() {
    this.particpentService.addParticpent(this.particpiant).subscribe(response => alert("Data Added"), err => console.log(err)


    )
  }

}
