import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-userinformation',
  templateUrl: './userinformation.component.html',
  styleUrls: ['./userinformation.component.css'],
  providers:[UserService]
})

export class UserinformationComponent implements OnInit {
  userdata;
  constructor(private userinfo: UserService) { }
  ngOnInit() {
  }
  getUser(){
    this.userinfo.getUser().subscribe(
     data => {
      this.userdata = data 
      console.log(this.userdata)//as string[];
    }
  );
  }
}
