
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  //providers:[UserService]
})
export class TestComponent implements OnInit {
  public name = 'Abhi';
  public myId = 'test';
  public isdisabled = true;
  public iserror = false;
  public isspecial = true;
  public highlightColor = 'orange';
  public greet = "";
  public color = "blue";
  public colors = ["blue","red","green","black","yellow"];
  public date = new Date();
  // public twoWayBind = "dsadsa";
  
  @Input() 
  public parentname; 
  
  // @Input('parentname')
  // public name

  @Output()
  public childname = new EventEmitter();
  
  public pipe ={
    "firstName":"Abhinav",
    "lastName":"Chelluri"
  }

  public messageclass={
    "text-success": !this.iserror,
    "text-danger": this.iserror,
    "text-special": this.isspecial, 
  }
  public titleStyles={
    color: "blue",
    fontStyle: "italic",
  } 
  constructor() { }
  ngOnInit() {
  }
  greetUser(){
    return "Hello, " + this.name; 
  }
  clsBind(){
    return "Class Binding"; 
  }
  styleBind(a){
    return "Style Binding-"+a; 
  }
  onClick(event){
    this.greet= "Event Binding-1";
    console.log(event);
    alert(event);
  }
  onClick2(b){
    alert(b)
  }
  fireEvent(){
    this.childname.emit('from Child to Parent')
  }
}