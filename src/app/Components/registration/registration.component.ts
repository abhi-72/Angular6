import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:[UserService]
})
export class RegistrationComponent implements OnInit {

  constructor(private userService:UserService) { }
  message;
  register;
  ngOnInit() {
    this.register={
      username: '',
      password: '',
      email: '',
      mobile:'',
      name:'',
    };
  }
  registerUser(){
    this.userService.registerUser(this.register).subscribe(
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
