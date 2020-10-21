import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-table-body]',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.css']
})
export class TableBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
array2=[
  {
    "Name": "John Mathews",
    "ID": 123456,
    "Skills": "ReactJS,AngularJS",
    "Project": "Cognizant Internal",
    "HCM": "Alex",
    "url": "img1.jpg"
  },
  {
    "Name": "Pasupuleti Rohith",
    "ID": 127456,
    "Skills": "ReactJS,AngularJS",
    "Project": "Cognizant Internal",
    "HCM": "Alex",
    "url": "img2.jpg"
  },
  {
    "Name": "Sabarna Choudhary",
    "ID": 122091,
    "Skills": "ReactJS,AngularJS",
    "Project": "Cognizant Internal",
    "HCM": "Alex",
    "url": "img1.jpg"
  },
  {
    "Name": "Divya Ghosal",
    "ID": 178456,
    "Skills": "ReactJS,AngularJS",
    "Project": "Cognizant Internal",
    "HCM": "Alex",
    "url": "img2.jpg"
  },
  {
    "Name": "Ishika Dutta",
    "ID": 104956,
    "Skills": "ReactJS,AngularJS",
    "Project": "Cognizant Internal",
    "HCM": "Alex",
    "url": "img2.jpg"
  },
  {
    "Name": "Surajit Rana",
    "ID": 125636,
    "Skills": "ReactJS,AngularJS",
    "Project": "Cognizant Internal",
    "HCM": "Alex",
    "url": "img1.jpg"
  },
  {
    "Name": "Subrata Dey",
    "ID": 124526,
    "Skills": "ReactJS,AngularJS",
    "Project": "Cognizant Internal",
    "HCM": "Alex",
    "url": "img1.jpg"
  },
  {
    "Name": "Sourav Deshmukh",
    "ID": 122230,
    "Skills": "ReactJS,AngularJS",
    "Project": "Cognizant Internal",
    "HCM": "Alex",
    "url": "img1.jpg"
  },
  {
    "Name": "Srikanth Verada",
    "ID": 190556,
    "Skills": "ReactJS,AngularJS",
    "Project": "Cognizant Internal",
    "HCM": "Alex",
    "url": "img1.jpg"
  },
  {
    "Name": "Shreya Chatterjee",
    "ID": 151256,
    "Skills": "ReactJS,AngularJS",
    "Project": "Cognizant Internal",
    "HCM": "Alex",
    "url": "img2.jpg"
  }
];
onremove(student){
let index=this.array2.indexOf(student);
this.array2.splice(index,1);
}
}
