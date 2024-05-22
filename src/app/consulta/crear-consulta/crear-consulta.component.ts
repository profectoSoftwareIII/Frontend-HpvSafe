import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-crear-consulta',
  templateUrl: './crear-consulta.component.html',
  styleUrls: ['./crear-consulta.component.scss'],
})
export class CrearConsultaComponent {
  constructor(private modalController: ModalController) {}
}
