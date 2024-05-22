import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaRoutingModule } from './consulta-routing.module';
import { CrearConsultaComponent } from './crear-consulta/crear-consulta.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CrearConsultaComponent],
  imports: [CommonModule, ConsultaRoutingModule, IonicModule],
})
export class ConsultaModule {}
