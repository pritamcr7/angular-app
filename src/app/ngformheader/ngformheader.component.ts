import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service';

@Component({
  selector: 'app-ngformheader',
  templateUrl: './ngformheader.component.html',
  styleUrls: ['./ngformheader.component.css']
})
export class NgformheaderComponent implements OnInit {

  constructor(private shared:SharedService) { }
  temp={
    Name:"",
    ID:0,
    Skills:"",
    Project:"",
    HCM:""
  }
  ngOnInit(){
    
    
    this.shared.currentMessage1.subscribe(message => this.temp.Name = message);
    this.shared.currentMessage2.subscribe(message => this.temp.ID = message);
    this.shared.currentMessage3.subscribe(message => this.temp.Skills = message);
    this.shared.currentMessage4.subscribe(message => this.temp.Project = message);
    this.shared.currentMessage5.subscribe(message => this.temp.HCM = message);
    //this.array2.push(temp);
    
  }
  array2=[
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
  ];

  addStudent(){
    
  this.array2.push(this.temp);
  }
  /*
  addStudent(){
    let temp={
      Name:"",
      ID:0,
      Skills:"",
      Project:"",
      HCM:""
    }
    temp.Name=this.shared.getMessage1();
    temp.ID=this.shared.getMessage2();
    temp.Skills=this.shared.getMessage3();
    temp.Project=this.shared.getMessage4();
    temp.HCM=this.shared.getMessage5();
    this.array2.push(temp);
  }*/
}
