import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaPacientePage } from './consulta-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaPacientePageRoutingModule {}
