import { Component, OnInit } from '@angular/core';
//import { UserService } from '../user.service';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:[RegistrationService]
})
export class RegistrationComponent implements OnInit {

  constructor(private registrationService:RegistrationService) { }
  message;
  register;
  ngOnInit() {
    this.register={
      username: '',
      password: '',
      email: '',
      mobile:'',
      occupation:'',
    };
  }
  registerUser(){
    this.registrationService.registerUser(this.register).subscribe(
    response => {
      this.message = 'User '+this.register.username+' has been created'
    },
    error => {
      var message = ""
      for (var item in this.register){
        if (item in error.error){
          message += error.error[item]+" ,"
        }
      }
      var comindex = message.lastIndexOf(",")
      console.log(message.substr(0, comindex))
      this.message = message.substr(0, comindex) 
    }
    );
  }
}
