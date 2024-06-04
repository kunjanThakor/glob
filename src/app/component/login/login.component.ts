import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Participant } from '../../participant';
import { FormsModule } from '@angular/forms';
import { ParticipantService } from '../../participant.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private services: ParticipantService, private router: Router) { }

  onSubmit() {
    // this.services.getParticpent().subscribe()
    this.services.getParticipantByEmailAndPassword(this.email, this.password).subscribe(
      (participant: Participant) => {
        localStorage.setItem('username', participant.email);
        localStorage.setItem('password', this.password);

        // this.interceptor.setCredentials(this.email, this.password);
        // console.log(participant.roles.toString());
        console.log(participant.enabled);

        if (participant && participant.roles && participant.roles.includes("ROLE_PARTICIPANT") && participant.enabled) {
          this.router.navigate(['/participentMain']);
        } else if (participant && participant.roles && participant.roles.includes("ROLE_ADMIN") && participant.enabled) {
          this.router.navigate(['/admin']);
        } else {
          // window.location.href="/"
          // Handle case when participant is null or roles are not as expected
          console.error('Participant or roles not as expected:', participant.roles, participant.enabled);
        }
      }
    )
  }
}
