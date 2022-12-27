import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces';
import { Cart } from 'src/app/core/interfaces/cart';
import { CartService, OrdersService } from 'src/app/core/services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Cart[] = [];
  cartSum = 0;

  constructor(
    private cartService: CartService,
    private orderService: OrdersService
  ) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartService.getCart()
      .pipe()
      .subscribe(res => {
        this.cartItems = res
        this.cartSum = this.cartItems.reduce((acc, item) => acc + item.total, 0)
      })
  }

  removeItem(item: Cart) {
    this.cartService.deleteItem(item.id).pipe().subscribe(() => {
      this.getCart();
    })
  }

  checkout() {

    this.orderService.placeOrder()
      .pipe()
      .subscribe(() => {
        this.getCart()
      })
  }


}
