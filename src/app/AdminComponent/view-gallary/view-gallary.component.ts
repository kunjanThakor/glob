import { Component, OnInit } from '@angular/core';
import { Gallary } from '../../gallary';
import { GallaryService } from '../../gallary.service';
import { NgFor, NgIf } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-view-gallary',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './view-gallary.component.html',
  styleUrls: ['./view-gallary.component.css'] // Changed 'styleUrl' to 'styleUrls'
})
export class ViewGallaryComponent implements OnInit {
  images: Gallary[] = [];
  imageUrlPrefix = 'http://localhost:8087/api/images/';
  latestImages: Gallary[] = []; // Array to hold latest images

  constructor(private imageService: GallaryService, private sanitizer: DomSanitizer) { }

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

  getImageUrl(imageId: number): SafeResourceUrl {
    const url = `${this.imageUrlPrefix}${imageId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getAllImages(): void {
    this.imageService.getAllImages().subscribe(data => {
      this.images = data;
    });
  }

  deleteImage(id: any): void {
    this.imageService.deleteImage(id).subscribe((response) => {
      alert("Image Deleted");
      window.location.reload();
      // this.getAllImages();
    },
      (error) => {
        console.error('Error deleting image:', error);
        // Handle error, if needed
      }
    );
  }
}
