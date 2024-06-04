import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../../participant.service';
import { Participant } from '../../participant';
import { FormsModule, NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-admin-all-participant',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './admin-all-participant.component.html',
  styleUrl: './admin-all-participant.component.css'
})
export class AdminAllParticipantComponent implements OnInit {

  participants: Participant[] = [];

  constructor(private participantservice: ParticipantService) {

  }

  ngOnInit() {
    this.participantservice.getDisabledParticipants().subscribe(data => {
      this.participants = data;
    });
  }
}
