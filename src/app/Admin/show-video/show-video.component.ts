import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Video } from '../../video';
import { ProjectService } from '../../project.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-video',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './show-video.component.html',
  styleUrls: ['./show-video.component.css']
})
export class ShowVideoComponent implements OnInit {

  deleteVideo(id: number) {
    this.isLoading = true
    this.videoService.deleteVideo(id).subscribe(res => { this.isLoading = false; window.location.reload() }, error => console.log(error))
  }
  videos: Video[] = [];
  isLoading: boolean = true;

  constructor(private videoService: ProjectService) { }

  ngOnInit(): void {
    this.videoService.getVideos().subscribe(
      (data: Video[]) => {
        this.videos = data;
        this.isLoading = false; // Stop loading once videos are fetched
      },
      (error) => {
        console.error('Error fetching videos', error);
        this.isLoading = false; // Stop loading on error
      }
    );
  }
}
