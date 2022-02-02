
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 orders:any;
  

  constructor(
    private router: Router,
    private orderService: OrderService

  ) {}

  ngOnInit(): void {
      this.orderService.getOrders().subscribe(response => {this.orders = response;});
      console.log(this.orders);
  }


  logOut() {
    this.router.navigate(['./sign-in-form.component.html'])
  }

}
