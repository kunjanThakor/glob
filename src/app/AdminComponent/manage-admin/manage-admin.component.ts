import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Participant } from '../../participant';
import { ParticipantService } from '../../participant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-admin',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf],
  templateUrl: './manage-admin.component.html',
  styleUrl: './manage-admin.component.css'
})
export class ManageAdminComponent {
  particpiant: Participant = {
    id: 0,
    name: '',
    email: '',
    password: '',
    contact: '',
    roles: ["Select Role"],
    enabled: false,
  }

  participants: Participant[] = [];

  role: string = "";
  constructor(private participantservice: ParticipantService, private router: Router) {

  }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.participantservice.getAllAdmin().subscribe(data => {
      this.participants = data;
    });
  }

  deleteUser(id: any): void {
    const adminCount = this.participants.filter(user => user.roles.includes('ROLE_ADMIN')).length;
    if (adminCount == 1) {
      alert("Last admin not be deleted you lost admin panel access !")
    }
    else {
      this.participantservice.deleteUser(id).subscribe(() => {
        this.getUserList();
        alert("Admin deleted")
      }
      )
    }

  }

  onSubmit() {

  }

  //edit
  isEditable: boolean = false;

  editUser(user: Participant, id: any) {

    if (this.isEditable) {
      this.updateUser(user, id);
    }
    this.isEditable = !this.isEditable

  }
  updateUser(participant: Participant, id: any) {
    // participant.id

    console.log(participant);

    this.participantservice.editUser(participant, id).subscribe(response => alert("Data Added"), err => console.log(err))
  }
}
