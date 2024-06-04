import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gallary } from './gallary';

@Injectable({
  providedIn: 'root'
})
export class GallaryService {

  apiUrl: string = "http://localhost:8087/createPost";

  constructor(private httpclient: HttpClient) { }

  uploadImage(imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', imageFile);
    return this.httpclient.post<any>(`${this.apiUrl}`, formData);
  }

  getApi: string = "http://localhost:8087/api/images/gallery"
  getAllImages(): Observable<Gallary[]> {
    return this.httpclient.get<Gallary[]>(this.getApi);
  }

  deleteApi: string = "http://localhost:8087/api/images/gallery/delete/";
  public deleteImage(id: any) {
    return this.httpclient.delete(`${this.deleteApi}${id}`)
  }
}
