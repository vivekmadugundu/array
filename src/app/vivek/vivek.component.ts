import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vivek',
  templateUrl: './vivek.component.html',
  styleUrls: ['./vivek.component.css']
})
export class VivekComponent implements OnInit {

  constructor(private route:Router)  { }

  ngOnInit(): void {
  }

goback(){
this.route.navigate(['/header'])

}

}
