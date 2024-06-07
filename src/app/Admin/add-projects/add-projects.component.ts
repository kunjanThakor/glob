import { Component } from '@angular/core';
import { Project } from '../../project';
import { ProjectService } from '../../project.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Filehandle } from '../../filehandle';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css'],
})
export class AddProjectsComponent {
  loading = false; // Add a loading state
  project: Project = {
    title: '',
    description: '',
    projectDetails: {
      startingDate: '',
      endingDate: ''
    }
  };

  selectedImageFile: File | null = null;

  constructor(private projectService: ProjectService, private sanitizer: DomSanitizer) { }

  validate(control: AbstractControl): ValidationErrors | null {
    const currentDate = new Date();
    const selectedDate = new Date(control.value);

    if (selectedDate < currentDate) {
      return { currentDateValidator: true };
    }

    return null;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.loading = true; // Start loading

    // Check if starting and ending dates are not less than current date
    const currentDate = new Date();
    const startingDate = new Date(this.project.projectDetails.startingDate);
    const endingDate = new Date(this.project.projectDetails.endingDate);

    if (startingDate < currentDate || endingDate < currentDate) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Starting and ending dates cannot be less than the current date!',
      });
      this.loading = false; // Stop loading
      return; // Stop form submission
    }

    // Check if required fields contain text
    if (!this.project.title.trim() || !this.project.description.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Title and description fields cannot be empty!',
      });
      this.loading = false; // Stop loading
      return; // Stop form submission
    }

    const projectData = this.preparedFormData(this.project);

    this.projectService.addProject(projectData).subscribe(
      response => {
        Swal.fire({
          title: 'Good job!',
          text: 'Project Added',
          icon: 'success'
        });
        this.loading = false; // Stop loading
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
        this.loading = false; // Stop loading
      }
    );
  }

  preparedFormData(project: Project): FormData {
    const formData = new FormData();
    formData.append('project', new Blob([JSON.stringify(project)], { type: 'application/json' }));
    formData.append('projectdetail', new Blob([JSON.stringify(project.projectDetails)], { type: 'application/json' }));

    if (project.projectImage) {
      formData.append('image', project.projectImage.file, project.projectImage.file.name);
    }

    return formData;
  }

  onImageSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));

      const fileHandle: Filehandle = {
        file: file,
        url: url
      };

      this.selectedImageFile = fileHandle.file;
      this.project.projectImage = fileHandle;
    }
  }
}
