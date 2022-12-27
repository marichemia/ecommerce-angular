import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends BaseService {

  getOrders(): Observable<any> {
    return this.get('order');
  }

  placeOrder(): Observable<any> {
    return this.post('order')
  }

}
