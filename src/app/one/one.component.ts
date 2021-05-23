import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
vvvv:any;
  constructor() { }

  ngOnInit(): void {
  }

child(data:any){
  this.vvvv=data
}

}
