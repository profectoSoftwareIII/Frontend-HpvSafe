import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroConsultaPageRoutingModule } from './registro-consulta-routing.module';

import { RegistroConsultaPage } from './registro-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroConsultaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroConsultaPage]
})
export class RegistroConsultaPageModule {}
