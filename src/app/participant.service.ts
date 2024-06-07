import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participant } from './participant';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http: HttpClient) { }

  private postUrl = "https://lucid-fulfillment-production.up.railway.app/addparticpent";
  private getUrl = "https://lucid-fulfillment-production.up.railway.app/auth";

  addParticpent(particpent: Participant): Observable<any> {
    return this.http.post(this.postUrl, particpent);
  }

  getParticpent(): Observable<any> {

    // const newUrl = this.getUrl + email + "/" + password;
    return this.http.get(this.getUrl)

  }
  getParticipantByEmailAndPassword(email: string, password: string): Observable<any> {
    const newUrl = "https://lucid-fulfillment-production.up.railway.app/sec/bylogin";
    const body = {
      email, password
    }
    return this.http.post(newUrl, body)

  }
  getDisabledParticipants(): Observable<Participant[]> {
    return this.http.get<Participant[]>(`https://lucid-fulfillment-production.up.railway.app/sec/displaydisabled`);
  }

  updateParticipant(id: any, enable: boolean) {
    return this.http.get(`https://lucid-fulfillment-production.up.railway.app/sec/enable/${id}/${enable}`);
  }

  getUserCount(): Observable<number> {
    return this.http.get<number>(`https://lucid-fulfillment-production.up.railway.app/sec/usercount`);
  }

  updatePassword(email: string, password: string): Observable<any> {
    const body = { email, password }
    return this.http.post("https://lucid-fulfillment-production.up.railway.app/sec/forgotpassword", body)
  }
}