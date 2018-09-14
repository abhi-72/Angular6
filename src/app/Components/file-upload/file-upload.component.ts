import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  myfile: File;
  message: String;

  constructor(private fileservice :UserService) { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    this.myfile = event.target.files[0]
  }

  onUpload(){
    this.fileservice.onUpload(this.myfile).subscribe(
    response => {
      if (response.error == undefined){
      this.message = response.message
      console.log(this.message)
      // this.route.navigate(['/home'])
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


