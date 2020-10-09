import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import {​​FormsModule}​​ from '@angular/forms'
@Component({
  selector: 'app-rohit1',
  templateUrl: './rohit1.component.html',
  styleUrls: ['./rohit1.component.css']
})
export class Rohit1Component implements OnInit {

  title = 'newApp';
  pageTitle:String = "Services in Angular";
  public id:Number;
  public name:String;
  public company:String;
  constructor(private empServiceData: UserService){​​}​​
  users:Array<any> = [];
  empDetails = {​​}​​;
  
  ngOnInit(){​​
    this.users = this.empServiceData.getAllData();
    this.empServiceData.servicemessage$
    .subscribe(
      message => {​​
        //this.message = message;
         if (message === "Hi, I am calling from Service!") {​​
          alert('Hi, Service Message received here');
        }​​
      }​​);
      console.log('Im the child comp');
          }​​
  ​​
  sendMessage() {​​
     console.log('Hello world! I am app.comp.ts');
     this.empServiceData.serviceMessage('Hi, I am calling from Service!');
     console.log('sent from parent to service');
   }​​
  
   index;
  onDelete(emp) {​​
     this.index = this.users.indexOf(emp);
     this.users.splice(this.index,1);
   }​​
   index1;
   addEmp() {​​
  // this.index1 = this.users.indexOf(emp);
   this.empDetails = {​​
     'id': this.id,
     'name':this.name,
     'company':this.company
   }​​;
   this.users.push(this.empDetails);
   console.log(this.empDetails);
   this.empDetails={​​}​​;
   return true;
  
   }​​

}