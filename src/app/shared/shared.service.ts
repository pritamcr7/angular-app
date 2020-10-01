import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  message1="Pritam"
  message2=20
  message3="Java"
  message4="Angular"
  message5="Alex"
  constructor() { }

  setMessage1(data){
  this.message1=data;
  
  }
  getMessage1(){
    
    return this.message1;
  }

  setMessage2(data){
    this.message2=data;
    
    }
    getMessage2(){
      return this.message2;
    }

    setMessage3(data){
      this.message3=data;
      
      }
      getMessage3(){
        return this.message3;
      }

      setMessage4(data){
        this.message4=data;
        
        }
        getMessage4(){
          return this.message4;
        }

        setMessage5(data){
          this.message5=data;
          
          }
          getMessage5(){
            return this.message5;
          }
}
