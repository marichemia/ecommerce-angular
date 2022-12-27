import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces';
import { ProductsService } from 'src/app/core/services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  products: Product[] = [];

  ngOnInit(): void {
    this.getAll();
  }


  getAll() {
    this.productsService.getProducts({})
      .pipe()
      .subscribe(res => {
        this.products = res;
      })
  }

  deleteItem(id: string) {
    this.productsService.deleteItem(id)
      .pipe()
      .subscribe(() => {
        this.getAll()
      })
  }

}
