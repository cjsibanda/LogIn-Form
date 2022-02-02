import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order, OrderService } from '../services/order.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(
    private router: Router,
    private orderService: OrderService

  ) { }

  home: any; //Home page

  ngOnInit(): void {
    let order = this.orderService.getOrders();
    console.log(order);
  }

  logOut() {
    this.router.navigate(['./sign-in-form.component.html'])
  }

}
