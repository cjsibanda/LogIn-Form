import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  signinForm: any; //form

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      "username": new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      "password": new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z ]*')])
    });
  }



  //login function 
  logIn() {
    this.router.navigate(['./home.component.html'])
  }


  submitData() 
  {
    console.log(this.signinForm.value);

    if(this.signinForm.value) 
    {
      //this.router.navigate(['./home.component.html'])
     alert(` Thank You for Signing In`)
     this.signinForm.reset(); //reset form value
    }
  }

  get username() {
    return this.signinForm.get('username'); //username
  }

  get password() {
    return this.signinForm.get('password');  //password
  }

}
