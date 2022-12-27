import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends BaseService {

  deleteItem(id: number): Observable<Category> {
    return this.delete<Category>(`category/${id}`);
  }

  getCategories(): Observable<Category[]> {
    return this.get<Category[]>('category');
  }

  getCategory(id: number): Observable<Category> {
    return this.get<Category>(`category/${id}`);
  }

  create(category: Category): Observable<Category> {
    return this.post<Category>('category', category);
  }

  update(id: number, category: Category): Observable<Category> {
    return this.put<Category>(`category/${id}`, category);
  }


}
