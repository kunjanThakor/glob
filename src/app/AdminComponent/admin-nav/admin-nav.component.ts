import { Component, ViewEncapsulation } from '@angular/core';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { RouterLink } from '@angular/router';
import { AdminGallaryComponent } from '../admin-gallary/admin-gallary.component';
import { AdminUsersComponent } from '../admin-users/admin-users.component';
import { AdminAllParticipantComponent } from '../admin-all-participant/admin-all-participant.component';
import { ViewGallaryComponent } from '../view-gallary/view-gallary.component';

@Component({
  selector: 'app-admin-nav',
  standalone: true,
  imports: [RouterLink, AdminGallaryComponent, AdminHomeComponent, AdminUsersComponent, AdminAllParticipantComponent, ViewGallaryComponent],
  templateUrl: './admin-nav.component.html',
  styleUrl: './admin-nav.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AdminNavComponent {

}
