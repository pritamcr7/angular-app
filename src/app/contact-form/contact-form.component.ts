import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  constructor() { }
   location=[{
     id:1,name:"Chennai"
   },
   {
    id:2,name:"Kolkata"
   },{
    id:3,name:"Bangalore"
   }
  ]
  log(x){
    console.log(x);
  }
  submit(f){
    console.log(f);
  }
}
