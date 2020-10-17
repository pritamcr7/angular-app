import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Student} from './../student';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url='https://jsonblob.com/api/1ca32371-0c5c-11eb-89ae-290d760fdc10';
  constructor(private http:HttpClient) { }


  getEmployees():Observable<Student[]>{
     return this.http.get<Student[]>(this.url);
  }

  
}
