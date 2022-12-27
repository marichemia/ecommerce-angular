import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Category, Product } from 'src/app/core/interfaces';
import { ProductsService } from 'src/app/core/services';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductsService,
    private categoryService: CategoriesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(args => {
      this.categoryId = args['category']
      this.getProducts()
    })
  }

  products: Product[] = [];
  categoryId?: number;

  categories$: Observable<Category[]> = this.categoryService.getCategories()

  getProducts() {
    const args = {
      categoryId: this.categoryId
    }
    this.productService.getProducts(args).pipe().subscribe(res => {
      this.products = res;
    })
  }



}
