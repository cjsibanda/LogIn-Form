import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  home: any; //Home page

  ngOnInit(): void {
  }

  logOut() {
    this.router.navigate(['./sign-in-form.component.html'])
  }

}
