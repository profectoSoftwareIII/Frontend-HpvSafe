import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuloPrevencionPageRoutingModule } from './modulo-prevencion-routing.module';

import { ModuloPrevencionPage } from './modulo-prevencion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuloPrevencionPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ModuloPrevencionPage],
})
export class ModuloPrevencionPageModule {}
