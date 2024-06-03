import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participant } from './participant';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http: HttpClient) { }

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
    const body = {
      email, password
    }
    return this.http.post(newUrl, body)

  }

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
