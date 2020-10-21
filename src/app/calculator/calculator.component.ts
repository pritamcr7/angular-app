import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1=0;
   num2=0;
  constructor() {}
    result=0;
  ngOnInit(){
  }
   add(){this.result=this.num1+this.num2;}
   sub(){this.result=this.num1-this.num2;}
   mul(){this.result=this.num1*this.num2;}
   div(){this.result=this.num1/this.num2;}
   onkeyup1($event){
     this.num1=parseInt($event.target.value);  
   }
   onkeyup2($event){
    this.num2=parseInt($event.target.value);
    
  }
}
