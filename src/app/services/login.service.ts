import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  loginUser(body): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain'}); 
    return this.http.post(`https://centraldeapps.com/RetailZone/api/v_001/rest_login`, body, {responseType: 'text', headers});
  }
}
