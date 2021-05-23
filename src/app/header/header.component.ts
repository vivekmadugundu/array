import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  newdata:any;
  constructor(private apiserv:ApiserviceService,private router:Router) { }

  ngOnInit(): void {
    this.apiserv.getserverdata().subscribe((data)=>{
this.newdata=data;
    })
  }

click(mine:any){
this.router.navigate(['/vivek'])
}

}
