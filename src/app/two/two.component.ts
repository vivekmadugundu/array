import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
@Output() child:EventEmitter<any>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  mydata(){
    this.child.emit("vivek")
  }


}
