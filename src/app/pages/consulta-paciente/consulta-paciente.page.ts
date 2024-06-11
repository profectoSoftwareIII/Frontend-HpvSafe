import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { ConsultasPacienteService } from 'src/app/services/consultas-paciente.service';
import { RegistroConsultaService } from 'src/app/services/registro-consulta.service';

@Component({
  selector: 'app-consulta-paciente',
  templateUrl: './consulta-paciente.page.html',
  styleUrls: ['./consulta-paciente.page.scss'],
})


export class ConsultaPacientePage implements OnInit {

  pacientes: any[] = [
    {
      nombre: 'Juan Pérez',
      foto: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      fechaNacimiento: '1989-05-12',
      ciudadNacimiento: 'Bogotá',
      genero: 'Masculino',
      grupoSanguineo: 'O+',
      direccion: 'Calle 123 # 45-67',
      telefono: '312 555 8899',
      email: 'juan.perez@example.com',
      eps: 'EPS Ejemplo',
      historial: 'Historial médico de Juan Pérez...',
    },
    {
      nombre: 'María Gómez',
      foto: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      fechaNacimiento: '1996-08-22',
      ciudadNacimiento: 'Medellín',
      genero: 'Femenino',
      grupoSanguineo: 'A-',
      direccion: 'Carrera 56 # 78-90',
      telefono: '321 666 7788',
      email: 'maria.gomez@example.com',
      eps: 'Otra EPS',
      historial: 'Historial médico de María Gómez...',
    },

  ];

  pacienteSeleccionado: any = this.pacientes[0]; // Paciente inicial



  constructor(private consultaService:ConsultasPacienteService,
    private registroConsultaService: RegistroConsultaService

  ) { }

  ngOnInit() {
    this.getPacientes();
  }


  getPacientes(){
    console.log("Si")
  }
  cambiarPaciente(event: any) {
    this.pacienteSeleccionado = this.pacientes.find(p => p.nombre === event.detail.value);
  }

}
