import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers:[UserService]
})
export class AuthenticationComponent implements OnInit {
  constructor(private authservice :UserService, private route: Router) {}
    message;
    auth;
  ngOnInit() {
    this.auth={
      username: "",
      password: "",
    };
  }
  authenticateUser(){
    this.authservice.authenticateUser(this.auth).subscribe(
    response => {
      if (response.error == undefined){
      this.message = response.message
      console.log(this.message)
      this.route.navigate(['/home'])
      }
      if (response.error != undefined){
        this.message = response.error.message
        console.log(this.message)
      }
    },
    error => {
      console.log('error',error)
    }
    );
  }
}
