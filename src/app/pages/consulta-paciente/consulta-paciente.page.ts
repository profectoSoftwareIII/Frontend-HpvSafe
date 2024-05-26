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

  pacientes: any[] = [];
  consultas: any[] = [];


  constructor(private consultaService:ConsultasPacienteService,
    private registroConsultaService: RegistroConsultaService

  ) { }

  ngOnInit() {
    this.getPacientes();
  }


  getPacientes(){
    this.registroConsultaService.getPacientes().subscribe(
      (datos) => {
        this.pacientes = datos;
        console.log(this.pacientes);
      },
      (err: any) => {
        console.log('Error al obtener los pacientes');
      }
    );
  }

  get_consultas(id: number) {
    this.consultaService
      .getConsultasPaciente(id)
      .pipe(tap((data) => (this.consultas = data)))
      .subscribe();
  }

}
