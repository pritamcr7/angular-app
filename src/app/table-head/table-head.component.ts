import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-table-head]',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.css']
})
export class TableHeadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    array1=["Serial","Name","ID","Skills","Project","HCM","Delete Options"];
}
