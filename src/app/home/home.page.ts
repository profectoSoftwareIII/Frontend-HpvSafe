import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  linksA: { name: string, path: string }[] = [];
  linksB: { name: string, path: string }[] = [];
  constructor() {

    this.updateLinks(); // Initial set of links
  }

  updateLinks() {
      this.linksA = [
        { name: 'Recordatorio', path: '/recordatorios' },
        { name: 'Registro Consulta', path: '/registro-consulta' },
        { name: 'Consulta Paciente(Consultas que tiene un paciente)', path: '/consulta-pacientes' }
      ];
      this.linksB = [
        { name: 'Modulo Prevencion', path: '/modulo-prevencion' },
        { name: 'Consulta Paciente(Pacientes de un medico)', path: '/consulta-paciente' },
        { name: 'Registro Paciente', path: '/registro-paciente' }
      ];
    }
  



}
