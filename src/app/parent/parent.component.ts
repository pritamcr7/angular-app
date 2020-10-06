import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  imgurl:Array<any>;
  cardTitle:Array<any>;
  cardDesc:Array<any>;
  buttonColor:Array<any>;

  constructor() { }

  ngOnInit(){
    this.imgurl=["https://i.ibb.co/rckgQKN/81-SVOMza-HWL-SL1280.jpg","https://i.ibb.co/2F2kK23/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree.jpg","https://i.ibb.co/LS8dvtK/pexels-photo-417074.jpg"];
    this.cardTitle=["Nature Image 1","Nature Image 2","Nature Image 3"];
    this.cardDesc=["This is the First Nature Image of the Multiple Collections","This is the Second Nature Image of the Multiple Collections","This is the Third Nature Image of the Multiple Collections"];
    this.buttonColor=["btn-success","btn-warning","btn-danger"];
  }

}
