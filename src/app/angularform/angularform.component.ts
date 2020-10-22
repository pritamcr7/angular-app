import { CustomValidators } from './custom.validators';
import { Component} from '@angular/core';
import {FormArray,FormBuilder,FormGroup,FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-angularform',
  templateUrl: './angularform.component.html',
  styleUrls: ['./angularform.component.css']
})
export class AngularformComponent {
  form;
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
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
      'country':new FormControl('',[
        Validators.required,
        //CustomValidators.mincountry
      ]),
      
    'location':new FormControl('',Validators.required),
    'uploadprofile':new FormControl('',Validators.required),
    'comments':new FormControl('',Validators.required),
      checkArray: this.fb.array([], [Validators.required])
    })
  }
  arr1=["Chennai","Bengalore","Hyderabad","Pune","Kochi"];
  arr2=["US","Non US"];
  
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
  get list_skills(){
    
    return this.form.get('skills');
  }
  get upload_profile(){
    
    return this.form.get('uploadprofile');
  }
  get comments_form(){
    
    return this.form.get('comments');
  }
get min_country(){
  return this.form.get('country');
}
  

  AllSkills: Array<any> = [
    { name: 'HTML5,CSS3,JS', value: 'HTML' },
    { name: 'Angular 8', value: 'Angular' },
    { name: 'Express JS', value: 'Express' },
    { name: 'SASS', value: 'Sass' },
    { name: 'React JS', value: 'React' },
    {name:'Node JS',value:'Node'},
    {name:'ES5,ES6,ES7...',value:'ES'},
    {name:'Veu JS',value:'Veu'},
    {name:'Mongo DB',value:'Mongo'},
    {name:'Bootstrap 4',value:'Bootstrap'},
    {name:'Typescript',value:'Typescript'}
  ];
  
  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
  
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
   
   console.log(this.form.value.checkArray.length);
   
  }
  onsubmit(){
    console.log(this.form.value);
  }
  
  
  
}
