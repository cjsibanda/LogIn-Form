import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  signinForm: any; //form


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  

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
      this.router.navigate(['/']);   //home.component.html)
    
    // this.signinForm.reset(); //reset form value
    }
  }

  get username() {
    return this.signinForm.get('username'); //username
  }

  get password() {
    return this.signinForm.get('password');  //password
  }

}