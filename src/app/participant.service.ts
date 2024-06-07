import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participant } from './participant';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  api: string = "http://localhost:8087"

  addParticpent(participant: Participant): Observable<any> {
    return this.http.post(this.api + "/addparticpent", participant);
  }

  //update role of user
  updateParticipant(id: any, enable: boolean) {
    return this.http.get(`http://localhost:8087/sec/enable/${id}/${enable}`);
  }


  getParticipantByEmailAndPassword(email: string, password: string): Observable<any> {
    const newUrl = "http://localhost:8087/bylogin";
=======
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
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a
    const body = {
      email, password
    }
    return this.http.post(newUrl, body)

  }
<<<<<<< HEAD

  public getAllParticipants(): Observable<Participant[]> {
    return this.http.get<Participant[]>(this.api + "/showAllUsers").pipe(
      map(participants => participants.filter(participant => participant.roles.includes('ROLE_PARTICIPENT')))
    );
  }
  //approved admin
  public getAllAdmin(): Observable<Participant[]> {
    return this.http.get<Participant[]>(this.api + "/showAllUsers").pipe(
      map(participants => participants.filter(participant => participant.roles.includes('ROLE_ADMIN') && participant.enabled))
    );
  }

  //request comming from users for any particular role
  public getAllAdminRequests(): Observable<Participant[]> {
    return this.http.get<Participant[]>(this.api + "/showallparitcipants")
  }

  //delete User
  public deleteUser(id: any) {
    return this.http.delete(`${this.api}/sec/user/delete/${id}`)
  }


  //edit user
  public editUser(participant: Participant, id: any) {
    return this.http.post(`${this.api}/sec/user/updatedata/${id}`, participant);
  }
}
=======
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
>>>>>>> 64cfdb2953b79eb98c9a79408ae8ac76eea2a85a
