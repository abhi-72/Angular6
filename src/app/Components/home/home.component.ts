import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name = "Abhi";
  public message;
  constructor(private userservice :UserService, private route: Router) { }
  ngOnInit() {
  }
  logoutUser(){
    this.userservice.logoutUser().subscribe(
    response => {
      if (response.error == undefined){
      this.message = response.message
      console.log(this.message)
      this.route.navigate(['/login'])
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