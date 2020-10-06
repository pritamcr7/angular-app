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
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
