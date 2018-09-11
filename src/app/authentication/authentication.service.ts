import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    constructor(private http: HttpClient) { }
    authenticateUser(userData): Observable<any>{
      return this.http.post<any>('http://127.0.0.1:8000/api/login/',userData)
    }
}

