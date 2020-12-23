import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('myForm') myForm:NgForm;

  title = 'form-app';

  mydefaultCourse="java";

  liveType="";

  gender=[
    {id:"1", value:"Male"},
    {id:"2", value:"Female"}
  ]

  defaultGender="Male";



  onSubmit(data){
   console.warn(data);
   this.user=data;
  this.myForm.reset();    //here for reset our form after submit than we have to use this process using @ViewChild
  }

  user={uname:"", pass:"", mail:" ", phone:" ", address:" ", course:" ", work:" ", 
  addressDetails:{village:" ", city:" ", state:" "},
   gender:" "}

}
