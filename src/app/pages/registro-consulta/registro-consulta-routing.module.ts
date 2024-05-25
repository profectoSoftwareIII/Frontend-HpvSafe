import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroConsultaPage } from './registro-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroConsultaPageRoutingModule {}
