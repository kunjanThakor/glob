import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  uploadNews(formData: FormData): Observable<any> {
    const api = "https://lucid-fulfillment-production.up.railway.app/sec/uploadnews"
    return this.http.post(api, formData);
  }

  /*
  getLatestNews(page: number = 0, size: number = 3): Observable<News[]> {
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());
    const api = "http://localhost:8086/sec/latest"

    return this.http.get<News[]>(api, { params });
  }*/

  getLatestNews(page: number = 0, size: number = 10): Observable<News[]> {
    const url = `https://lucid-fulfillment-production.up.railway.app/sec/latest?page=${page}&size=${size}`;
    return this.http.get<News[]>(url);
  }
}
