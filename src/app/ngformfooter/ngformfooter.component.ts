import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service'
@Component({
  selector: 'app-ngformfooter',
  templateUrl: './ngformfooter.component.html',
  styleUrls: ['./ngformfooter.component.css']
})
export class NgformfooterComponent implements OnInit {

  constructor(private shared:SharedService) { }
  student={
    Name:"",
    ID:0,
    Skills:"",
    Project:"",
    HCM:""
  }
  ngOnInit(){
    
    this.shared.currentMessage1.subscribe(message => this.student.Name = message);
    this.shared.currentMessage2.subscribe(message => this.student.ID = message);
    this.shared.currentMessage3.subscribe(message => this.student.Skills = message);
    this.shared.currentMessage4.subscribe(message => this.student.Project = message);
    this.shared.currentMessage5.subscribe(message => this.student.HCM = message);
    
   
  }
  log1(student_name){
    this.student.Name=student_name.value;
    //this.shared.setMessage1(this.student.Name);
    this.shared.changeMessage1(this.student.Name);
    console.log(this.student.Name);
  }
  log2(student_id){
    this.student.ID=parseInt(student_id.value);
   // this.shared.setMessage2(this.student.ID);
   this.shared.changeMessage2(this.student.ID);
    console.log(this.student.ID);
  }
  log3(student_skills){
    this.student.Skills=student_skills.value;
    //this.shared.setMessage3(this.student.Skills);
    this.shared.changeMessage3(this.student.Skills);
    console.log(this.student.Skills);
  }
  log4(student_project){
    this.student.Project=student_project.value;
   // this.shared.setMessage4(this.student.Project);
   this.shared.changeMessage4(this.student.Project);
    console.log(this.student.Project);
  }
  log5(student_hcm){
    this.student.HCM=student_hcm.value;
   // this.shared.setMessage5(this.student.HCM);
   this.shared.changeMessage5(this.student.HCM);
    console.log(this.student.HCM);
    console.log(this.student);
  }
  /*
  addStudent(){
    this.shared.changeMessage1(this.student.Name);
    this.shared.changeMessage2(this.student.ID);
    this.shared.changeMessage3(this.student.Skills);
    this.shared.changeMessage4(this.student.Project);
    this.shared.changeMessage5(this.student.HCM);
  }*/
  
}
