import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AdminGallaryComponent } from '../admin-gallary/admin-gallary.component';
import { AdminUsersComponent } from '../admin-users/admin-users.component';
import { AdminAllParticipantComponent } from '../admin-all-participant/admin-all-participant.component';
import { ParticipantService } from '../../participant.service';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-admin-nav',
  standalone: true,
  imports: [RouterLink, AdminGallaryComponent, AdminHomeComponent, AdminUsersComponent, AdminAllParticipantComponent],
  templateUrl: './admin-nav.component.html',
  styleUrl: './admin-nav.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AdminNavComponent implements OnInit {
  counter: number = 0;
  constructor(private router: Router, private participantService: ParticipantService, private pdf: ProjectService) { }
  ngOnInit(): void {
    console.log(localStorage.getItem('role'));
    if (typeof localStorage !== 'undefined') {
      if (localStorage.getItem('role') != "ROLE_ADMIN") {
        window.location.href = "/"
      }
      // Access localStorage here
    }
    this.participantService.getUserCount().subscribe(res => this.counter = res);
  }


  deleteStorage() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('role')
  }

  downloadPdf() {
    this.pdf.getPdf().subscribe(response => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'product.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
