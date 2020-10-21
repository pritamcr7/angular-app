import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators{
 static notSpace(control:AbstractControl) : ValidationErrors | null {
  if((control.value as string).indexOf(' ')>=0)
       return {notSpace:true} ;

       return null;
  }
   
   static noSpecial(control:AbstractControl) : ValidationErrors | null {
    
   if(!(/^[^`~!@#$%\^&*()_+={}|[\]\\:';"<>?,./]*$/.test(control.value))){
     return {noSpecial:true}
     
   }
     return null;
   }
}