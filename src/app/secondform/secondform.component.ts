import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-secondform',
  templateUrl: './secondform.component.html',
  styleUrls: ['./secondform.component.css']
})
export class SecondformComponent implements OnInit {
genders=['gay','trans','teledhu'];
signupform:any;
table:any;
hobbies=FormArray;
control=FormControl;
  constructor() { }

  ngOnInit(): void {
this.signupform=new FormGroup({
  'useerdata':new FormGroup({
    'firstname':new FormControl(null,Validators.required),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'lastname':new FormControl(null,[Validators.required,Validators.minLength(5)])
  }),
  'gender':new FormControl(null),
  'hobbies':new FormArray([])
})
this.table=[];
  }


onsubmit(){
  console.log(this.signupform)
}

addrow(){
  const control=new FormControl(null,Validators.required);
  this.signupform.get('hobbies').push(control);
}

delete(index:any){
  this.signupform.get('hobbies').removeAt(index);
 
}
feed(data:any){
this.table.push(data.value)
console.log(data)
}


}
