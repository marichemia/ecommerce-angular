import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Product } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService {
  deleteItem(id: string): Observable<Product> {
    return this.delete<Product>(`product/${id}`);
  }
  getProducts(params: {
    categoryId?: number,
    limit?: number,
    search?: string,

  }): Observable<Product[]> {
    return this.get<Product[]>('product', params);
  }

  getProduct(id: string): Observable<Product> {
    return this.get<Product>(`product/${id}`);
  }

  create(product: Product): Observable<Product> {
    return this.post<Product>('product', product);
  }

  update(id: string, product: Product): Observable<Product> {
    return this.put<Product>(`product/${id}`, product);
  }


}
