import { PostService } from './../shared/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genetic-child1',
  templateUrl: './genetic-child1.component.html',
  styleUrls: ['./genetic-child1.component.css']
})
export class GeneticChild1Component implements OnInit {
public employees=[];
  constructor(private post:PostService) { }

  ngOnInit(){
    this.post.getEmployees()
    .subscribe(data=>{
      this.employees=data;
    })
  }

}
