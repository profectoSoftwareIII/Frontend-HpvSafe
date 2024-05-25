import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaPacientePageRoutingModule } from './consulta-paciente-routing.module';

import { ConsultaPacientePage } from './consulta-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaPacientePageRoutingModule
  ],
  declarations: [ConsultaPacientePage]
})
export class ConsultaPacientePageModule {}
