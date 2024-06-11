import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuloPrevencionPage } from './modulo-prevencion.page';

const routes: Routes = [
  {
    path: '',
    component: ModuloPrevencionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuloPrevencionPageRoutingModule {}
