import { NgClass, NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
interface Testimonial {
  image: string;
  text: string;
  name: string;
  profession: string;
}
@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.css'
})
<<<<<<< HEAD
export class VolunteerComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [
    {
      image: 'assets/img/volunteer.jpg',
=======
export class VolunteerComponent {
  testimonials: Testimonial[] = [
    {
      image: '../../../assets/img/volunteer/volunteer.jpg',
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a
      text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
      name: 'Jagrati Mehta',
      profession: 'Profession'
    },
    {
<<<<<<< HEAD
      image: 'assets/img/testimonial-2.jpg',
=======
      image: '../../../assets/img/volunteer/vidhya.jpg',
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a
      text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
      name: 'Vidhya KS',
      profession: 'Profession'
    },
    {
<<<<<<< HEAD
      image: 'assets/img/testimonial-3.jpg',
=======
      image: '../../../assets/img/volunteer/karan.jpg',
      text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
      name: 'Karan',
      profession: 'Profession'
    },
    {
      image: '../../../assets/img/volunteer/kunjan.jpg',
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a
      text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
      name: 'Kunjan',
      profession: 'Profession'
    },
    {
<<<<<<< HEAD
      image: 'assets/img/volunteer.jpg',
=======
      image: '../../../assets/img/volunteer/jyoti.jpg',
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a
      text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
      name: 'Jyoti',
      profession: 'Profession'
    },
    {
<<<<<<< HEAD
      image: 'assets/img/volunteer.jpg',
=======
      image: '../../../assets/img/volunteer/jhanvi.jpg',
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a
      text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
      name: 'Janvi Yadav',
      profession: 'Profession'
    }
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;

  }

  intervalId: any;
<<<<<<< HEAD

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000); // Change slide every 3 seconds
  }

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
=======
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a
}
