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
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent {
  participants: Participant[] = [];

  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
    this.fetchDisabledParticipants();
  }

  fetchDisabledParticipants() {
    this.participantService.getDisabledParticipants().subscribe(data => {
      this.participants = data;
    });
  }

  approvedUser(participant: Participant) {
    participant.enabled = true;
    this.participantService.updateParticipant(participant.id, true).subscribe(() => {
      console.log('Participant approved successfully');
      // Reload the page
      window.location.reload();
    });
  }
}
