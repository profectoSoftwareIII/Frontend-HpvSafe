import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  linksA: { name: string; path: string; icon: string }[] = [];
  linksB: { name: string; path: string; icon: string }[] = [];

  constructor() {
    this.updateLinks(); // Initial set of links
  }

  updateLinks() {
    this.linksA = [
      { name: 'Recordatorio', path: '/recordatorios', icon: 'alarm' },
      {
        name: 'Registro Consulta',
        path: '/registro-consulta',
        icon: 'clipboard',
      },
      {
        name: 'Detalles Paciente',
        path: '/consulta-pacientes',
        icon: 'person',
      },
    ];
    this.linksB = [
      { name: 'Modulo Prevencion', path: '/modulo-prevencion', icon: 'shield' },
      {
        name: 'Registro Paciente',
        path: '/registro-paciente',
        icon: 'person-add',
      },
      {
        name: 'Consultas Paciente',
        path: '/consulta-paciente',
        icon: 'reader',
      },
    ];
  }
}
