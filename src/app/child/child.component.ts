import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

import { NewapiserviceService } from '../newapiservice.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() childtoparent:EventEmitter<any>=new EventEmitter();
@Input() transfer:any;
lawada:any;
  constructor(private serv:NewapiserviceService) { }
childdata:any;
  ngOnInit() {
    this.serv.serverdata().subscribe((data)=>{
this.childdata=data;
this.childtoparent.emit(this.lawada)
    })
  }

  sendchilddata(){
this.lawada=['lawadaa']
this.childtoparent.emit(this.lawada)
  }



}
