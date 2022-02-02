import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Order {
  userId: number;
  id: number;
  title:'string';
  body:'string';

}

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
    
  }

  getOrders(): Observable <Order> { 
    return this.http.get<Order>('https://jsonplaceholder.typicode.com/posts/1').pipe((response) => response);
       
  }
}
