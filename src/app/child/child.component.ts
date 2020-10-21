import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() imgurl:string;
  @Input() cardTitle: string;
  @Input() cardDesc: string;
  @Input() buttonColor:string;
  constructor() { }

  ngOnInit(): void {
  }

}
