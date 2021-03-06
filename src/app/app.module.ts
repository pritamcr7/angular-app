import { UserService } from './shared/user.service';
import { PostService } from './shared/post.service';

import { ZippyComponent } from './zippy/zippy.component';
import { TodosComponent } from './todos/todos.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CoursesService } from './couses.services';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Courses } from './courses.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TableHeadComponent } from './table-head/table-head.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AngularformComponent } from './angularform/angularform.component';
import { NgformheaderComponent } from './ngformheader/ngformheader.component';
import { NgformfooterComponent } from './ngformfooter/ngformfooter.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { Rohit1Component } from './rohit1/rohit1.component';
import { Rohit2Component } from './rohit2/rohit2.component';
import { GeneticChild1Component } from './genetic-child1/genetic-child1.component';
import { GeneticChild2Component } from './genetic-child2/genetic-child2.component';

import { NgCircleProgressModule } from 'ng-circle-progress';



@NgModule({
  declarations: [
    AppComponent,
    Courses,
    SignupFormComponent,
    CalculatorComponent,
    TableHeadComponent,
    TableBodyComponent,
    ContactFormComponent,
    AngularformComponent,
    NgformheaderComponent,
    NgformfooterComponent,
    ParentComponent,
    ChildComponent,
    TodosComponent,
    ZippyComponent,
    PostsComponent,
    Rohit1Component,
    Rohit2Component,
    GeneticChild1Component,
    GeneticChild2Component
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      "backgroundColor": "#FDB900",
      "radius": 70,
      "maxPercent": 200,
      "units": " Percent",
      "unitsColor": "#483500",
      "outerStrokeWidth": 5,
      "outerStrokeColor": "#FFFFFF",
      "innerStrokeColor": "#FFFFFF",
      "titleColor": "#483500",
      "subtitleColor": "#483500",
      "showSubtitle": false,
      "showInnerStroke": false,
      "startFromZero": false})
  ],
  providers: [
    CoursesService,
    PostService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
