import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearConsultaComponent } from './crear-consulta/crear-consulta.component';
import { ListarConsultaComponent } from './listar-consulta/listar-consulta.component';

const routes: Routes = [
  {
    path: 'registrar-consulta',
    component: CrearConsultaComponent,
  },
  {
    path: 'listar-consultas',
    component: ListarConsultaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaRoutingModule {}
