import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";

import { ActivatedRoute, Router } from "@angular/router";
import { of, switchMap, tap } from "rxjs";
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
  })

  constructor(
    private categoryService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: any) => {
        if (params['id']) {
          return this.categoryService.getCategory(params['id'])
        }
        return of(null)
      })
    ).subscribe(res => {
      if (res) {
        this.form.patchValue(res)
      }
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    if (this.form.value.id) {
      this.categoryService.update(this.form.value.id, this.form.value)
        .pipe()
        .subscribe(() => {
          this.router.navigate(['/manager/categories'])
            .then(() => {
              this.form.reset()
            })
        })
    } else {
      this.categoryService.create(this.form.value)
        .pipe()
        .subscribe(() => {
          this.router.navigate(['/manager/categories'])
            .then(() => {
              this.form.reset()
            })
        })
    }

  }

}
