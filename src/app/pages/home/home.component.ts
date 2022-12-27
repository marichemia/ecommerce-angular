import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/core/interfaces';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  sub$ = new Subject();
  products: Product[] = [];

  constructor(private productsService: ProductsService) { }
  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts({}).pipe(takeUntil(this.sub$)).subscribe((products) => {
      this.products = products
    })
  }

}
