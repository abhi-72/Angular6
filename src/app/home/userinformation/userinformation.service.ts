import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserinformationService {

  constructor(private http: HttpClient) { }
  getUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/users/')
   }
}
