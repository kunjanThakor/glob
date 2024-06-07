import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  addProject(formdata: FormData): Observable<any> {
    const api = "https://lucid-fulfillment-production.up.railway.app/sec/addprojects";
    return this.http.post(api, formdata);
  }

  getAllProjects(): Observable<Project[]> {
    const api = "https://lucid-fulfillment-production.up.railway.app/sec/getAllProjects";
    return this.http.get<Project[]>(api);
  }

  deleteById(project: Project): Observable<any> {
    const api = `https://lucid-fulfillment-production.up.railway.app/sec/deletebyid`;
    const id = project.id
    const body = id

    return this.http.post(api, body);
  }
  getPdf(): Observable<Blob> {
    const api = "https://lucid-fulfillment-production.up.railway.app/api/v2/getPdf";
    return this.http.get(api, { responseType: 'blob' });
  }

  updateData(proj: Project): Observable<any> {
    const api = "https://lucid-fulfillment-production.up.railway.app/sec/update";
    return this.http.post(api, proj)
  }

  uploadFile(video: FormData): Observable<any> {
    return this.http.post("https://lucid-fulfillment-production.up.railway.app/sec/uploadvideo", video);
  }

  private apiUrl = 'https://lucid-fulfillment-production.up.railway.app/sec/showvideo';

  getVideos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  deleteVideo(id: number): Observable<any> {
    const apiUrl = 'https://lucid-fulfillment-production.up.railway.app/sec/deletevideo';
    const body = { id }
    return this.http.post<any>(apiUrl, body);
  }
}
