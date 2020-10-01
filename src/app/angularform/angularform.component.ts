import { CustomValidators } from './custom.validators';
import { Component} from '@angular/core';
import {FormArray,FormBuilder,FormGroup,FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-angularform',
  templateUrl: './angularform.component.html',
  styleUrls: ['./angularform.component.css']
})
export class AngularformComponent {
  form=new FormGroup({
    'associatename':new FormControl('',[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
      CustomValidators.noSpecial,
      CustomValidators.notNumber
    ]),
    'associateid':new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6),
      CustomValidators.notSpace,
      CustomValidators.noSpecial,
      CustomValidators.notAlphabet
    ]),
    'projectid':new FormControl('',[
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(12),
      CustomValidators.notSpace,
      CustomValidators.noSpecial
    ]),
    'skills':new FormControl('',Validators.required),
    'location':new FormControl('',Validators.required),
    'uploadprofile':new FormControl('',Validators.required),
    'comments':new FormControl('',Validators.required)
  });
  

  arr1=["Chennai","Bengalore","Hyderabad","Pune","Kochi"];
  arr2=["US","Non US"];
  skills_array=["HTML5,CSS3,JS","Angular 8","Express JS","SASS","React JS","Node JS","ES5,ES6,ES7...","Veu JS","Mongo DB","Bootstrap 4","Typescript"];
  fav_skills=[];

  
  

  
  
  get associate_name(){
    return this.form.get('associatename');
  }
  get associate_id(){
    return this.form.get('associateid');
  }
  get project_id(){
    return this.form.get('projectid');
  }
  get offshore_location(){
    return this.form.get('location');
  }
  /*
  get f(){
    console.log(this.form.controls);
    return this.form.controls;
  }*/
  get list_skills(){
    
    return this.form.get('skills');
  }
  get upload_profile(){
    
    return this.form.get('uploadprofile');
  }
  get comments_form(){
    
    return this.form.get('comments');
  }

  
  form2: FormGroup;
  CountryData: Array<any> = [
    { name: 'IND', value: 'India' },
    { name: 'AUS', value: 'Australia' },
    { name: 'USA', value: 'America' },
    { name: 'RUS', value: 'Rusia' },
    { name: 'Eng', value: 'England' }
  ];
  constructor(private fb: FormBuilder) {
    this.form2 = this.fb.group({
      checkArray: this.fb.array([])
    })
  }
  onCheckboxChange(e) {
    const checkArray: FormArray = this.form2.get('checkArray') as FormArray;
  
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
   
   console.log(this.form2.value.checkArray.length);
  }
  
  
  
}
