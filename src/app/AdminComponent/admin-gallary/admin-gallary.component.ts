import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { GallaryService } from '../../gallary.service';


@Component({
  selector: 'app-admin-gallary',
  standalone: true,
  imports: [NgIf],
  templateUrl: './admin-gallary.component.html',
  styleUrl: './admin-gallary.component.css'
})
export class AdminGallaryComponent {
  selectedFile: File | null = null;
  uploadedImageUrl: string | null = null;

  constructor(private http: HttpClient, private senitizer: DomSanitizer, private imageUploadService: GallaryService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];

  }

  uploadImage(): void {
    if (this.selectedFile) {
      this.imageUploadService.uploadImage(this.selectedFile).subscribe(
        () => {
          alert("Image Uploaded ")
          window.location.reload()
        },
        error => {
          console.error('Error uploading image:', error);
          // Handle error message or further actions
        }
      );
    } else {
      console.error('Error: No file selected for upload.');
    }
  }
}
