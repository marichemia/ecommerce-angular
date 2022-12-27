import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Category } from 'src/app/core/interfaces';
import { ProductsService } from 'src/app/core/services';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  categories$: Observable<Category[]> = this.categoryService.getCategories()

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required),
  })

  constructor(private categoryService: CategoriesService,
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: any) => {
        if (params['id']) {
          return this.productService.getProduct(params['id'])
        }
        return of(null)
      })
    ).subscribe(res => {
      if (res) {
        this.form.patchValue({
          ...res,
          categoryId: res.category.id
        })
      }
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    if (this.form.value.id) {
      this.productService.update(this.form.value.id, this.form.value).pipe().subscribe(() => {
        this.router.navigate(['/manager/products'])
          .then(() => {
            this.form.reset()
          })
      })
    } else {
      this.productService.create(this.form.value).pipe().subscribe(() => {
        this.router.navigate(['/manager/products'])
          .then(() => {
            this.form.reset()
          })
      })
    }
  }

}
