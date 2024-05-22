import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordatorioRoutingModule } from './recordatorio-routing.module';
import { CrearRecodatorioComponent } from './crear-recodatorio/crear-recodatorio.component';

@NgModule({
  declarations: [CrearRecodatorioComponent],
  imports: [CommonModule, RecordatorioRoutingModule],
})
export class RecordatorioModule {}
