import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroname',
  templateUrl: './heroname.component.html',
  styleUrls: ['./heroname.component.css']
})
export class HeronameComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  public heronames=[
    {"id":1,"name":"Ram Charan"},
    {"id":2,"name":"NTR"},
    {"id":3,"name":"Allu Arjun"},
    {"id":4,"name":"Sai Tej"},
    {"id":5,"name":"Mahesh Babu"},
    {"id":6,"name":"Pavan Kalyan"},
    {"id":7,"name":"Ramya Krishna"},
    {"id":8,"name":"Krishna"}
  ]

  click(hero:any){
this._router.navigate(['/herodata',hero.name])
  }

  

}
