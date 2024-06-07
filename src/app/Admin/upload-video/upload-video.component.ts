import { CommonModule } from '@angular/common';
import { Component, ElementRef, viewChild } from '@angular/core';
import { ProjectService } from '../../project.service';
import { error } from 'console';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-upload-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-video.component.html',
  styleUrl: './upload-video.component.css'
})
export class UploadVideoComponent {

  selectedFile: File | undefined;
  isLoading: boolean = false;


  constructor(private projectService: ProjectService) { }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.selectedFile) {
      this.isLoading = true; // Start loading
      const formData = new FormData();
      formData.append("video", this.selectedFile);
      this.projectService.uploadFile(formData).subscribe(
        response => {
          Swal.fire({
            title: 'Video Added Successfully',
            // text: 'Project Added successfully',
            icon: 'success'
          });
          this.resetFileInput();
          this.isLoading = false; // Stop loading
        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
          });
          this.resetFileInput();
          this.isLoading = false; // Stop loading
        }
      );
    }
  }
  resetFileInput() {
    // Use JavaScript to reset the file input
    const input: HTMLInputElement = document.getElementById('video') as HTMLInputElement;
    if (input) {
      input.value = '';
    }
  }
}