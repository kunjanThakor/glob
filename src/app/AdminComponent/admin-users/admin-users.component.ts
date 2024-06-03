import { Component } from '@angular/core';
import { Participant } from '../../participant';
import { ParticipantService } from '../../participant.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.css'
})
export class AdminUsersComponent {

  participants: Participant[] = [];

  constructor(private participantservice: ParticipantService) {

  }

  ngOnInit() {
    this.participantservice.getAllAdminRequests().subscribe(data => {
      this.participants = data;
    });
  }



  approvedUser(participant: Participant) {
    participant.enabled = true;
    this.participantservice.updateParticipant(participant.id, true).subscribe(() => {
      console.log('Participant approved successfully');
      // this.fetchDisabledParticipants();
      // window.location.href = "/admin/enable";
      window.location.reload();
    });
  }
}
