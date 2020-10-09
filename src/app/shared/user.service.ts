import { Injectable } from '@angular/core';
import {​​ BehaviorSubject }​​ from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public servicemessage = new BehaviorSubject("default Message");            //Creating a Variable
  servicemessage$ = this.servicemessage.asObservable();     //Exposing the Variable as observable

//message = "Hi, I am a message from Service!";
  constructor() {​​ }​​
public id:number;
public name:string;
public company:string;
user = [
  {​​ 'id': 101, 'name': "Rohith", 'company': "CTS" }​​,
  {​​ 'id': 102, 'name': "Sashank", 'company': "CTS" }​​,
  {​​ 'id': 103, 'name': "Lakshmi", 'company': "CTS" }​​,
  {​​ 'id': 104, 'name': "Sai Ram", 'company': "CTS" }​​,
  {​​ 'id': 105, 'name': "Sandhya", 'company': "CTS" }​​
];
  getAllData() {​​
    return this.user;  
  }​​
  serviceMessage(message:string) {​​
    console.log('Message received in Service');
    this.servicemessage.next(message);
    console.log(message);
    console.log('I have sent the message from Service');
  }​​
}​​

