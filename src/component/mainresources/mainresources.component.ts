import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GalleryComponent } from '../gallery/gallery.component';
import { AnnualReportComponent } from '../annual-report/annual-report.component';

@Component({
  selector: 'app-mainresources',
  standalone: true,
  imports: [RouterLink,GalleryComponent,AnnualReportComponent],
  templateUrl: './mainresources.component.html',
  styleUrl: './mainresources.component.css'
})
export class MainresourcesComponent {

}
