import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearRecodatorioComponent } from './crear-recodatorio/crear-recodatorio.component';

const routes: Routes = [
  {
    path: 'crear-recordatorio',
    component: CrearRecodatorioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordatorioRoutingModule {}
