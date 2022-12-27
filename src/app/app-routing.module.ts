import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { MainLayoutComponent } from './features/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(x => x.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./pages/products/products.module').then(x => x.ProductsModule)
      },
      {
        path: 'cart',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/cart/cart.module').then(x => x.CartModule)
      },
      {
        path: 'orders',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/orders/orders.module').then(x => x.OrdersModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then(x => x.AuthModule)
      },
      {
        path: 'manager',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/manager/manager.module').then(x => x.ManagerModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
