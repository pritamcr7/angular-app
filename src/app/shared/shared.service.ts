import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
 /* message1="Pritam"
  message2=20
  message3="Java"
  message4="Angular"
  message5="Alex"*/

  private messageSource1 = new BehaviorSubject("default message1");
  currentMessage1 = this.messageSource1.asObservable();

  private messageSource2 = new BehaviorSubject(10);
  currentMessage2 = this.messageSource2.asObservable();

  private messageSource3 = new BehaviorSubject("default message3");
  currentMessage3 = this.messageSource3.asObservable();

  private messageSource4 = new BehaviorSubject("default message4");
  currentMessage4 = this.messageSource4.asObservable();

  private messageSource5 = new BehaviorSubject("default message5");
  currentMessage5 = this.messageSource5.asObservable();
  constructor() { }
/*
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
          }*/
          changeMessage1(message: string) {
            this.messageSource1.next(message);
          }

          changeMessage2(message: number) {
            this.messageSource2.next(message);
          }

          changeMessage3(message: string) {
            this.messageSource3.next(message);
          }

          changeMessage4(message: string) {
            this.messageSource4.next(message);
          }

          changeMessage5(message: string) {
            this.messageSource5.next(message);
          }
}
