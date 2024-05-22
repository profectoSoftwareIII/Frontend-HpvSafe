import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaRoutingModule } from './consulta-routing.module';
import { CrearConsultaComponent } from './crear-consulta/crear-consulta.component';

@NgModule({
  declarations: [CrearConsultaComponent],
  imports: [CommonModule, ConsultaRoutingModule],
})
export class ConsultaModule {}
