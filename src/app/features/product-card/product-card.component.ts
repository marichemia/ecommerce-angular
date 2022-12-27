import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces';
import { CartService } from 'src/app/core/services';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  addToCart() {
    this.cartService.addToCart({
      productId: this.product.id,
      quantity: 1
    }).subscribe()
  }

  @Input() product: Product = {} as Product;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
