
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-herodata',
  templateUrl: './herodata.component.html',
  styleUrls: ['./herodata.component.css']
})
export class HerodataComponent implements OnInit {
public names:any;
  constructor(private _activatedroute:ActivatedRoute,private _router:Router) { }

  ngOnInit() {
    this._activatedroute.paramMap.subscribe((params:ParamMap)=>{
      let name=(params.get('name'));
      this.names= name;
    })
  }

  next(){
     let next=this.names ;
     this._router.navigate(['/heroname',{name:next}]);
  }

}
