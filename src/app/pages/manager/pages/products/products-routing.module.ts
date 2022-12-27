import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'create',
    component: ProductsEditComponent
  },
  {
    path: 'edit/:id',
    component: ProductsEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
