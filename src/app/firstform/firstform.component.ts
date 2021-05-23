import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-firstform',
  templateUrl: './firstform.component.html',
  styleUrls: ['./firstform.component.css']
})
export class FirstformComponent implements OnInit {
  genders=["male","Female","gay"]
  signupform:any;
 
  constructor() { }

get hobbycontrols(){
 return this.signupform.get('hobbies').controls
}

  ngOnInit(): void {
    this.signupform= new FormGroup({
      'userdata': new FormGroup({
        'username':new FormControl(null,Validators.required),
        'email':new FormControl(null,[Validators.required,Validators.email]),
      }),

      'gender':new FormControl("female"),
      'hobbies': new FormArray([])
    })
  }

  onaddhobby(){
const control = new FormControl(null,[Validators.required]);
this.signupform.get('hobbies').push(control);
  }

onsubmit(){

console.log(this.signupform)
}

}
