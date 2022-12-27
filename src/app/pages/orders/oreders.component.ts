import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/interfaces';
import { OrdersService } from 'src/app/core/services';

@Component({
  selector: 'app-oreders',
  templateUrl: './oreders.component.html',
  styleUrls: ['./oreders.component.css']
})
export class OredersComponent implements OnInit {

  orders: any;

  constructor(private orderService: OrdersService) { }

  orders$: Observable<Order[]> = this.orderService.getOrders();

  ngOnInit(): void {
  }



}
