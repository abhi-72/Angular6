import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
//import {Router} from '@angular/router';
//import {ApiService} from '../api.service';
//import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})

export class AppComponent implements OnInit{
  constructor(private service :UserService){
  }
  ngOnInit(){
  }
}
