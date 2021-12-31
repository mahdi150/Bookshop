import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signUpForm:FormGroup=new FormGroup({})
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm(){
    this.signUpForm=new FormGroup({
      name:new FormControl('',Validators.required),
      password :new FormControl('',Validators.required),
      email:new FormControl('',Validators.required)
    })
   
  }
  onSubmit(){
    var user:User={
      name: this.signUpForm.controls.name.value,
      email:this.signUpForm.controls.email.value,
      password:this.signUpForm.controls.password.value
    }
    this.userService.currentUser=user
    this.router.navigate(['/home/products'])

  }

}
