<<<<<<< HEAD
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
=======
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a

@Component({
  selector: 'app-contact1',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterLink],
  templateUrl: './contact1.component.html',
  styleUrl: './contact1.component.css'
})
export class Contact1Component {

=======
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './contact1.component.html',
  styleUrls: ['./contact1.component.css']
})
export class Contact1Component {

  name: string = "";
  email: string = "";
  subject: string = "";
  message: string = "";

  constructor() { }

  sendEmail(event: Event): void {
    event.preventDefault();

    

    const form = {
      user_name: this.name,
      user_email: this.email,
      subject: this.subject,
      message: this.message,
    };

    emailjs.send('service_6hh7wbk', 'template_ugay47g', form, '9LgJKIf2nnV7oj3GC')
      .then((response: EmailJSResponseStatus) => {
        console.log('Email sent successfully:', response);
        alert('Email sent successfully!');
        this.resetForm();
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send email. Please try again later.');
      });
  }

  resetForm(): void {
    this.name = "";
    this.email = "";
    this.subject = "";
    this.message = "";
  }
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a
}
