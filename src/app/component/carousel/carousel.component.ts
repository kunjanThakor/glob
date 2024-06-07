import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
<<<<<<< HEAD
import { DonationComponent } from '../donation/donation.component';
=======
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterLink, DonationComponent, NgFor, NgClass],
=======
  imports: [RouterLink, NgFor, NgClass],
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  slides = [
    {
      src: 'assets/img/carousel-1.jpg',
      title: 'Empowering Communities Through Innovation & Technology',
      subtitle: 'Join Us in Building a Brighter Tomorrow',
      description: `At Global Technopower Foundation, we're dedicated to bridging the digital divide and empowering marginalized communities through innovative projects like 'Coding on Wheels' and 'Women Empowerment'.`,
      donateLink: '/donation',
      volunteerLink: '#'
    },
    {
      src: 'assets/img/carousel-2.jpg',
      title: 'Bridging the Digital Divide',
      subtitle: 'Empowering Through Technology',
      description: `Explore our digital literacy programs designed to equip learners with essential skills for the digital age. From coding boot camps to computer literacy workshops, we're ensuring everyone has the tools they need to succeed in today's tech-driven world.`,
      donateLink: '/donation',
      volunteerLink: '#'
    },
    {
      src: 'assets/img/carousel-3.jpg',
      title: 'Join Our Mission to Make a Difference',
      subtitle: 'Empowering Communities for a Brighter Future',
      description: `Together, we can break barriers, challenge stereotypes, and create a world where everyone has equal access to education, opportunities, and a better tomorrow.`,
      donateLink: '/donation',
      volunteerLink: '#'
    }
  ];

  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

}
