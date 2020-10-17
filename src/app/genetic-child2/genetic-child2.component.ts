import { Component, OnInit } from '@angular/core';
import {PostService} from '../shared/post.service';
@Component({
  selector: 'app-genetic-child2',
  templateUrl: './genetic-child2.component.html',
  styleUrls: ['./genetic-child2.component.css']
})
export class GeneticChild2Component implements OnInit {

  constructor(private post:PostService) { }

  ngOnInit(): void {
  }

}
