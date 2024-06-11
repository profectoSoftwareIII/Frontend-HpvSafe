import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaPacientesPageRoutingModule } from './consulta-pacientes-routing.module';

import { ConsultaPacientesPage } from './consulta-pacientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaPacientesPageRoutingModule
  ],
  declarations: [ConsultaPacientesPage]
})
export class ConsultaPacientesPageModule {}
