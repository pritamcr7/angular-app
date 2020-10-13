import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service';
import { take } from 'rxjs/operators'
import { of } from 'rxjs';
@Component({
  selector: 'app-ngformheader',
  templateUrl: './ngformheader.component.html',
  styleUrls: ['./ngformheader.component.css']
})
export class NgformheaderComponent implements OnInit {
array2;
  constructor(private shared:SharedService) { }
  temp={
    Name:"",
    ID:0,
    Skills:"",
    Project:"",
    HCM:""
  }
  ngOnInit(){
    
    /*
    this.shared.currentMessage1.subscribe(message => this.temp.Name = message);
    this.shared.currentMessage2.subscribe(message => this.temp.ID = message);
    this.shared.currentMessage3.subscribe(message => this.temp.Skills = message);
    this.shared.currentMessage4.subscribe(message => this.temp.Project = message);
    this.shared.currentMessage5.subscribe(message => this.temp.HCM = message);*/
    //this.array2.push(temp);
    this.shared.getArray()
    .subscribe(data=>{
      this.array2=data;
    });
    
    
  }
  
  
  onremove(student){
    console.log(this.array2);
    let index=this.array2.indexOf(student);
    this.array2.splice(index,1);
    }
/*
  addStudent(){
    
  this.array2.push(this.temp);
  }
  
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
