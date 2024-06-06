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
export class VolunteerComponent {
  testimonials: Testimonial[] = [
    {
      image: '../../../assets/img/volunteer/volunteer.jpg',
      text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
      name: 'Jagrati Mehta',
      profession: 'Profession'
    },
    {
      image: '../../../assets/img/volunteer/vidhya.jpg',
      text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
      name: 'Vidhya KS',
      profession: 'Profession'
    },
    {
      image: '../../../assets/img/volunteer/karan.jpg',
      text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
      name: 'Karan',
      profession: 'Profession'
    },
    {
      image: '../../../assets/img/volunteer/kunjan.jpg',
      text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
      name: 'Kunjan',
      profession: 'Profession'
    },
    {
      image: '../../../assets/img/volunteer/jyoti.jpg',
      text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
      name: 'Jyoti',
      profession: 'Profession'
    },
    {
      image: '../../../assets/img/volunteer/jhanvi.jpg',
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
}
