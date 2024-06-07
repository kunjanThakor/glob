import { Component, Injectable, OnInit } from '@angular/core';
import { Project } from '../../project';
import { ProjectService } from '../../project.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Filehandle } from '../../filehandle';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-display-project',
  standalone: true,
  imports: [CommonModule, FormsModule, MatPaginatorModule],
  templateUrl: './display-project.component.html',
  styleUrls: ['./display-project.component.css']
})
export class DisplayProjectComponent implements OnInit {
  project: Project[] = [];
  paginatedProjects: Project[] = [];
  pageEvent: PageEvent | undefined;
  isEditable: boolean = false;
  modalImageUrl: SafeUrl | null = null;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  isLoading: boolean = true; // Add isLoading property


  constructor(private projectservices: ProjectService, private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
    this.projectservices.getAllProjects().pipe(
      map((projects: Project[]) => projects.map((project: Project) => this.createImage(project)))
    ).subscribe(response => {
      this.project = response.map(project => {
        this.isLoading = false
        return project;
      });
      this.setPaginatedProjects();
    });
  }

  setPaginatedProjects() {
    const startIndex = this.pageEvent ? this.pageEvent.pageIndex * this.pageEvent.pageSize : 0;
    const endIndex = this.pageEvent ? startIndex + this.pageEvent.pageSize : this.project.length;
    this.paginatedProjects = this.project.slice(startIndex, endIndex);
  }

  onPaginateChange(event: PageEvent) {
    this.pageEvent = event;
    this.pageSize = event.pageSize;
    this.setPaginatedProjects();
  }

  toggleEdit(proj: Project) {
    if (this.isEditable) {
      this.saveProject(proj);
    }
    this.isEditable = !this.isEditable;
  }

  saveProject(proj: Project) {
    this.projectservices.updateData(proj).subscribe(
      response => {
        console.log('Project updated successfully', response);
        window.location.href = "admin/displayproject";
      },
      error => {
        console.error('Error updating project', error);
      }
    );
  }

  deleteProject(project: Project) {
    this.projectservices.deleteById(project).subscribe(response => {
      Swal.fire({
        title: "Good job!",
        text: "Project Deleted",
        icon: "success"
      });
      this.project = this.project.filter(proj => proj !== project);
      this.setPaginatedProjects();
    }, error => {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    });
  }

  createImage(project: Project): Project {
    if (project.projectImage) {
      const imageFile: any = project.projectImage;
      const imgBlob = this.dataUrlToBlob(imageFile.picByte, imageFile.type);
      const img = new File([imgBlob], imageFile.name, { type: imageFile.type });
      const finalImg: Filehandle = {
        file: img,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(img))
      };
      project.projectImage = finalImg;
    }
    project.id = project.id;
    return project;
  }

  dataUrlToBlob(picByte: any, imageType: any) {
    const byteString = window.atob(picByte);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8array], { type: imageType });
    return blob;
  }

  openModel(imageUrl: SafeUrl) {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
    this.modalImageUrl = imageUrl;
  }

  closeModel() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }
}
