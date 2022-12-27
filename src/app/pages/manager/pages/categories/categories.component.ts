import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/interfaces';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoryService: CategoriesService) { }

  categories: Category[] = [];

  ngOnInit(): void {
    this.getCategories();
  }


  getCategories() {
    this.categoryService.getCategories().pipe().subscribe((res) => {
      console.log(res)
      this.categories = res;
    })
  }

  deleteItem(id: number) {
    this.categoryService.deleteItem(id).pipe().subscribe(() => {
      this.getCategories();
    })
  }

}
