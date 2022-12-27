import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OredersComponent } from './oreders.component';

const routes: Routes = [{
  path: '',
  component: OredersComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
