import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-coursesdata',
  templateUrl: './coursesdata.component.html',
  styleUrls: ['./coursesdata.component.css']
})
export class CoursesdataComponent implements OnInit {
public courseid:any;
  constructor(private _activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
   this._activatedroute.paramMap.subscribe((params:ParamMap)=>{
     let ID=(params.get('id'))
     this.courseid=ID
   })
  }

previous(){
  let previousid=this.courseid-1;
this.router.navigate(['/coursesdata',previousid])
}

}
