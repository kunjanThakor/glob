import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participant } from './participant';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http: HttpClient) { }

  private postUrl = "http://localhost:8086/addparticpent";
  private getUrl = "http://localhost:8086/auth";

  addParticpent(particpent: Participant): Observable<any> {
    return this.http.post(this.postUrl, particpent);
  }

  getParticpent(): Observable<any> {

    // const newUrl = this.getUrl + email + "/" + password;
    return this.http.get(this.getUrl)

  }
  getParticipantByEmailAndPassword(email: string, password: string): Observable<any> {
    const newUrl = "http://localhost:8086/sec/bylogin";
    const body = {
      email, password
    }
    return this.http.post(newUrl, body)

  }
  getDisabledParticipants(): Observable<Participant[]> {
    return this.http.get<Participant[]>(`http://localhost:8086/sec/displaydisabled`);
  }

  updateParticipant(id: any, enable: boolean) {
    return this.http.get(`http://localhost:8086/sec/enable/${id}/${enable}`);
  }

  getUserCount(): Observable<number> {
    return this.http.get<number>(`http://localhost:8086/sec/usercount`);
  }

  updatePassword(email: string, password: string): Observable<any> {
    const body = { email, password }
    return this.http.post("http://localhost:8086/sec/forgotpassword", body)
  }
}