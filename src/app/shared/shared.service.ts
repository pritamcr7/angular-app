import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class SharedService {
 /* message1="Pritam"
  message2=20
  message3="Java"
  message4="Angular"
  message5="Alex"*/

  private messageSource1 = new BehaviorSubject("default message1");
  currentMessage1 = this.messageSource1.asObservable();

  private messageSource2 = new BehaviorSubject(10);
  currentMessage2 = this.messageSource2.asObservable();

  private messageSource3 = new BehaviorSubject("default message3");
  currentMessage3 = this.messageSource3.asObservable();

  private messageSource4 = new BehaviorSubject("default message4");
  currentMessage4 = this.messageSource4.asObservable();

  private messageSource5 = new BehaviorSubject("default message5");
  currentMessage5 = this.messageSource5.asObservable();
  constructor(private http : HttpClient) { 
    
  }
/*array=[
  {
    "Name": "John Mathews",
    "ID": 123456,
    "Skills": "ReactJS,AngularJS",
    "Project": "Cognizant Internal",
    "HCM": "Alex"
  },
  {
    "Name": "Pasupuleti Rohith",
    "ID": 127456,
    "Skills": "ReactJS,AngularJS",
    "Project": "Cognizant Internal",
    "HCM": "Alex"
  },
  {
    "Name": "Sabarna Choudhary",
    "ID": 122091,
    "Skills": "ReactJS,AngularJS",
    "Project": "Cognizant Internal",
    "HCM": "Alex"
  },
  {
    "Name": "Divya Ghosal",
    "ID": 178456,
    "Skills": "ReactJS,AngularJS",
    "Project": "Cognizant Internal",
    "HCM": "Alex"
  },
  {
    "Name": "Ishika Dutta",
    "ID": 104956,
    "Skills": "ReactJS,AngularJS",
    "Project": "Cognizant Internal",
    "HCM": "Alex"
  },
  {
    "Name": "Surajit Rana",
    "ID": 125636,
    "Skills": "ReactJS,AngularJS",
    "Project": "Cognizant Internal",
    "HCM": "Alex"
  },
  {
    "Name": "Subrata Dey",
    "ID": 124526,
    "Skills": "ReactJS,AngularJS",
    "Project": "Cognizant Internal",
    "HCM": "Alex"
  },
  {
    "Name": "Sourav Deshmukh",
    "ID": 122230,
    "Skills": "ReactJS,AngularJS",
    "Project": "Cognizant Internal",
    "HCM": "Alex"
  },
  {
    "Name": "Srikanth Verada",
    "ID": 190556,
    "Skills": "ReactJS,AngularJS",
    "Project": "Cognizant Internal",
    "HCM": "Alex"
  },
  {
    "Name": "Shreya Chatterjee",
    "ID": 151256,
    "Skills": "ReactJS,AngularJS",
    "Project": "Cognizant Internal",
    "HCM": "Alex"
  }
];*/

  getArray(){
   return this.http.get('https://jsonblob.com/api/1ca32371-0c5c-11eb-89ae-290d760fdc10');
  }
array2;
setarr(arr){
  console.log(arr);
this.array2=arr;
}
getarr(){
  return this.array2;
}


          changeMessage1(message: string) {
            this.messageSource1.next(message);
          }

          changeMessage2(message: number) {
            this.messageSource2.next(message);
          }

          changeMessage3(message: string) {
            this.messageSource3.next(message);
          }

          changeMessage4(message: string) {
            this.messageSource4.next(message);
          }

          changeMessage5(message: string) {
            this.messageSource5.next(message);
          }
}
