import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordatoriosPageRoutingModule } from './recordatorios-routing.module';

import { RecordatoriosPage } from './recordatorios.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordatoriosPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule  
  ],
  declarations: [RecordatoriosPage]
})
export class RecordatoriosPageModule {}
