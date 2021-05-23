import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
newdata:any;
dataa:any;
  constructor(private apiser:ApiserviceService) { }

  ngOnInit(): void {

    this.apiser.getserverdata().subscribe((data)=>{
this.newdata=data;
    })
  }
childtoparent(copy:any){
this.dataa=copy;
}


}
