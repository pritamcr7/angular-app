import { CoursesService } from './couses.services';
import {Component, ComponentFactoryResolver} from '@angular/core'
/*
@Component({
    selector:'courses',
    template:`
    <h2>{{title}}</h2>
    <h5 [textContent]="title"></h5>
    <ul>
    <li *ngFor="let i of listcourse">{{i}}</li>
    
    </ul>
    <img src={{imgurl}}/><br>
    <button class="btn btn-primary" [class.active]="isactive">Success</button><br>
    <button class="button2" (click)="onSave($event)">Save</button>
    <br>
    
    <input [(ngModel)]="name" (keyup.enter)="onEnter2()"/>
    `
})
export class Courses{
    name="Pritam";
     title="List of Courses";
     listcourse;
     constructor(service:CoursesService){
         
         this.listcourse=service.getCourses();
     }
     
     imgurl="https://i.ibb.co/JqjHdVq/bridge-golden-gate-5639x3561.jpg";
     isactive=false;
     onSave($event){
         alert("Pritam");
         console.log($event);
     }
     
     onEnter2(){
         console.log(this.name);
     }
}*/

@Component({
    selector:'courses',
    template:`
    {{course.title | uppercase}}<br>
    {{course.rating | number:'1.1-1'}}<br>
    {{course.students | number}}<br>
    {{course.price | currency:'INR'}}<br>
    {{course.releaseDate | date:'mediumDate'}}
    `
})
export class Courses{
    course={
        title:"Full Stack Development",
        rating:4.3567854,
        students:3500,
        price:5000,
        releaseDate:new Date(2020,11,5)
    }
}