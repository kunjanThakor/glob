import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';
import { AdminGallaryComponent } from '../admin-gallary/admin-gallary.component';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [RouterModule, AdminNavComponent, AdminHomeComponent, AdminGallaryComponent],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AdminHomeComponent {
}
