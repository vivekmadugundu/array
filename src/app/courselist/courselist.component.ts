import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {

   
  }
 public course:any[]=[
 {"id":1,"name":"Angular"},
 {"id":2,"name":"Bootstrap"},
 {"id":3,"name":"mango db"},
 {"id":4,"name":"Css"},
 {"id":5,"name":"Html"},
 {"id":6,"name":"Python"},               
 {"id":7,"name":"SQL"},
 {"id":8,"name":"mateRIAL"},
 {"id":9,"name":"maths"}, ]


 clickme(list:any){
this._router.navigate(['/coursesdata',list.id]);
}

                                


                              }