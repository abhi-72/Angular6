import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  constructor(private http: HttpClient) { }
  
  authenticateUser(userData): Observable<any>{
    return this.http.post<any>('http://127.0.0.1:8000/api/login/',userData)
  }

  getUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/getUsers/')
  }

  registerUser(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/register/',userData)
  }

  logoutUser(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/logout/')
  }
  
  fileUpload(myfiles:Array<File>): Observable<any>{
    //fileUpload(myfiles:File): Observable<any>{
      const headers = new HttpHeaders().set("X-CSRFToken", "");
    const uploadData = new FormData();
    for (let i = 0; i < myfiles.length; i++){
      uploadData.append('myfiles',myfiles[i],myfiles[i].name)
    }
    //uploadData.append('myfiles', myfiles, myfiles.name);
    return this.http.post('http://127.0.0.1:8000/api/fileUpload/', uploadData, {headers})
  }
  
  fileDelete(userData): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/fileDelete/', userData)
  }
}
