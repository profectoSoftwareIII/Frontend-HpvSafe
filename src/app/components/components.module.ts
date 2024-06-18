import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponentComponent } from './header-component/header-component.component';

@NgModule({
  declarations: [HeaderComponentComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponentComponent],
})
export class ComponentsModule {}
