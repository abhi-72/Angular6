import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
    constructor(private http: HttpClient) { }
    logoutUser(): Observable<any>{
      return this.http.get('http://127.0.0.1:8000/api/logout/')
    }
}
