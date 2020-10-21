import { Component, OnInit } from '@angular/core';
import { UserService } from './../shared/user.service';
@Component({
  selector: 'app-rohit2',
  templateUrl: './rohit2.component.html',
  styleUrls: ['./rohit2.component.css']
})
export class Rohit2Component implements OnInit {

  constructor(private empServiceData : UserService) {​​ }​​
  message;
  ngOnInit() {​​
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

}
