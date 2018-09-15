import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  myfile: File;
  date: String;
  message: String="Please Select files to upload";
  myfiles: Array<File>=[];
  myfilesDisplay: Array<File>=[];
  files_count: String; 

  constructor(private fileservice :UserService) { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    this.myfilesDisplay=[]
    this.myfiles = event.target.files;
    this.message = 'Number of files: '+this.myfiles.length;
    if (this.myfiles) {
      for (let file of this.myfiles) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.myfilesDisplay.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }
  
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), 1000)).then(()=>console.log("fired"));
  }
  
  onUpload(){
    this.fileservice.fileUpload(this.myfiles).subscribe(
    response => {
      if (response.error == undefined){
        this.message = "Uploading.."
        this.delay(10000);
        this.message = response.message
        this.myfilesDisplay = []
      }
      if (response.error != undefined){
        this.message = response.error.message
      }
    },
    error => {
      console.log('error',error)
    }
    );
  }

  onDelete(){
    this.fileservice.fileDelete(this.date).subscribe(
    response => {
      if (response.error == undefined){
      this.message = response.message
      }
      if (response.error != undefined){
        this.message = response.error.message
      }
    },
    error => {
      console.log('error',error)
    }
    );
  }
}


