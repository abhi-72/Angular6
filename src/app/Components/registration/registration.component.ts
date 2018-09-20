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
  validate_username;
  ngOnInit() {
    this.register={
      username: '',
      password: '',
      email: '',
      mobile:'',
      name:'',
    };
  }

  validateUsername(updatedvalue){
    if (updatedvalue.length === 0){
      this.validate_username = null
    }
    else{
      this.validate_username = (updatedvalue.length > 5 && updatedvalue.length < 8) ? 'Ok' : 'Username should contain min 5 char and max 8 char' 
    }
  }
  
  registerUser(){
    this.userService.registerUser(this.register).subscribe(
    response => {
      this.message = response.error.message//this.register.username+' has been created'
    },
    error => {
      var message = ""
      for (var item in this.register){
        if (item in error.error){
          message += error.error[item]+" ,"
        }
      }
      if (message.includes(',')){
        var comindex = message.lastIndexOf(",")
        this.message = message.substr(0, comindex)
      } 
    }
    );
  }
}
