
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getSafePropertyAccessString } from '@angular/compiler';


//export interface Order {
 // userId: number;
 // id: number;
 // title:'string';
 // body:'string';
//}

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  private url = 'https://jsonplaceholder.typicode.com/posts';


constructor (private httpClient: HttpClient) {}

getOrders() {
  return this.httpClient.get(this.url);
  }

}

 
