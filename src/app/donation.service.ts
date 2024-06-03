import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donation } from './donation';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private httpclient: HttpClient) { }

  public createTransaction(amount: number): Observable<any> {
    return this.httpclient.get(`http://localhost:8087/createTransaction/${amount}`);
  }

  saveDonationDetails(donation: Donation): Observable<Donation> {
    return this.httpclient.post<Donation>("http://localhost:8087/donation/savedonaiondetails", donation);
  }

}
