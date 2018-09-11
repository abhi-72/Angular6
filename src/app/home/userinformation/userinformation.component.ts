import { Component, OnInit } from '@angular/core';
import { UserinformationService } from './userinformation.service';

@Component({
  selector: 'app-userinformation',
  templateUrl: './userinformation.component.html',
  styleUrls: ['./userinformation.component.css'],
  providers:[UserinformationService]
})

export class UserinformationComponent implements OnInit {
  userdata;
  constructor(private userinfo: UserinformationService) { }
  ngOnInit() {
  }
  getUser(){
    this.userinfo.getUser().subscribe(
     data => {
      console.log(this.userdata)
      this.userdata = data //as string[];
    }
  );
  }
}
