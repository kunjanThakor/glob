import { Component, OnInit } from '@angular/core';
import { GallaryService } from '../../gallary.service';
import { Gallary } from '../../gallary';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  images: Gallary[] = [];
  imageUrlPrefix = 'http://localhost:8087/api/images/';
  constructor(private imageService: GallaryService) { }
  latestImages: Gallary[] = []; // Array to hold latest images


  ngOnInit(): void {
    this.loadImages();
  }
  loadImages(): void {
    this.imageService.getAllImages().subscribe(
      images => {
        this.images = images;
        this.latestImages = this.getLatestImages();
      },
      error => {
        console.error('Error fetching images:', error);
      }
    );
  }

  getLatestImages(): Gallary[] {
    if (this.images.length === 0) {
      return [];
    }
    // Sort images by ID in descending order and take the first 3
    return this.images.sort((a, b) => b.id - a.id).slice(0, 3);
  }

  getImageUrl(imageId: number): string {
    return `${this.imageUrlPrefix}${imageId}`;
  }


}
