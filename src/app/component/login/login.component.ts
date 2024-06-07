import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Participant } from '../../participant';
import { FormsModule } from '@angular/forms';
import { ParticipantService } from '../../participant.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

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
  email2: string = '';
  url: string = "http://localhost:4200/reset";
  public sendEmail(e: Event, email: string) {
    e.preventDefault();
    // this.otp = this.generateOTP();

    const formData = {
      // user_name: this.name,
      user_email: email,
      subject: "Reset Password",
      message: "Reset Password Link",
      otp: this.url
    };

    emailjs.send('service_y58wz8l', 'template_ptdv287', formData, 'XzrY-_DP0kaNNqu_F')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  saveEmail(e: Event) {
    const mail = prompt("Enter Your Email:", this.email2);
    if (mail) {
      localStorage.setItem('email', mail);
      this.email2 = mail;
      this.sendEmail(e, mail)
      console.log(`Email saved: ${mail}`);
    } else {
      console.log('No email entered.');
    }
    alert("Reset Link is send to your mail")
  }

  constructor(private services: ParticipantService, private router: Router) { }

  onSubmit() {
    // this.services.getParticpent().subscribe()
    this.services.getParticipantByEmailAndPassword(this.email, this.password).subscribe(
      (participant: Participant) => {
        localStorage.setItem('username', participant.email);
        localStorage.setItem('password', this.password);
        localStorage.setItem('role', participant.roles.toString())

        // this.interceptor.setCredentials(this.email, this.password);
        // console.log(participant.roles.toString());
        console.log(participant.enabled);

        if (participant && participant.roles && participant.roles.includes("ROLE_PARTICIPANT") && participant.enabled) {
          this.router.navigate(['/participentMain']);
        } else if (participant && participant.roles && participant.roles.includes("ROLE_ADMIN") && participant.enabled) {
          this.router.navigate(['/admin']);
        } else if (participant && participant.roles && participant.roles.includes("ROLE_ADMIN_SUPER") && participant.enabled) {
          this.router.navigate(['/admin']);
        } else {
          window.location.href = "/"
          // Handle case when participant is null or roles are not as expected
          console.error('Participant or roles not as expected:', participant.roles, participant.enabled);
        }
      }
    )
  }
}
