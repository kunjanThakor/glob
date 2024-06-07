import { Component } from '@angular/core';
import { NewsService } from '../../news.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { News } from '../../news';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-upload-news',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upload-news.component.html',
  styleUrl: './upload-news.component.css'
})
export class UploadNewsComponent {
  news: News = {
    title: '',
    description: '',
  };
  file: File | null = null;

  constructor(private newsService: NewsService) { }

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  onSubmit() {
    if (this.file && this.news) {
      const formData = new FormData();
      formData.append('news', new Blob([JSON.stringify(this.news)], { type: 'application/json' }));
      formData.append('image', this.file);
      this.newsService.uploadNews(formData).subscribe(response => {
        Swal.fire({
          title: 'News Added !',
          // text: 'Project Added',
          icon: 'success'
        });
      },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
          });
        }
      );
    }
  }
}