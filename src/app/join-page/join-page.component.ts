import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms'

@Component({
  selector: 'app-join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['./join-page.component.css']
})
export class JoinPageComponent implements OnInit{
  joininForm:any
  constructor(private joibbuilder:FormBuilder){}
  ngOnInit(): void {
   this.joininForm=this.joibbuilder.group({
    fullName:['',[Validators.required]],
    mobileNumber:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
    gender:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    bloodgroup:['',[Validators.required]],
    otherbloodGroup:[''],
    joinCheckbox:['',[Validators.required]]
   })
  }
  submit(){
  

  }

}
