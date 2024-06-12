import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/interfaces/consulta.interface';
import { ConsultasPacienteService } from 'src/app/services/consultas-paciente.service';

@Component({
  selector: 'app-consulta-paciente',
  templateUrl: './consulta-paciente.page.html',
  styleUrls: ['./consulta-paciente.page.scss'],
})
export class ConsultaPacientePage implements OnInit {
  paciente: Paciente | undefined;
  consultas: any[] = [];
  pacientes: Paciente[] = [];

  constructor(private consultaService: ConsultasPacienteService) {}

  ngOnInit() {
    this.getPacientes();
  }

  getPacientes() {
    this.consultaService.getPacientes().subscribe((data: Paciente[]) => {
      this.pacientes = data;
    });
  }

  cambiarPaciente(event: any) {
    const pacienteIdSeleccionado = event.detail.value;
    console.log(pacienteIdSeleccionado);
    if (pacienteIdSeleccionado) {
      this.paciente = this.pacientes.find(
        (p) => p.id === pacienteIdSeleccionado
      );
      this.obtenerConsultas(pacienteIdSeleccionado);
    }
  }

  obtenerConsultas(idPacienteSeleccionado: number) {
    const pacienteSeleccionado = this.pacientes.find(
      (paciente) => paciente.id === idPacienteSeleccionado
    );
    if (pacienteSeleccionado) {
      // Aquí puedes realizar cualquier acción con el paciente seleccionado
      console.log('Paciente seleccionado:', pacienteSeleccionado);
      this.getConsultas(pacienteSeleccionado.id);
    } else {
      console.log('No se encontró el paciente seleccionado');
    }
  }
  getConsultas(id: number) {
    this.consultaService.getConsultasPaciente(id).subscribe((data) => {
      console.log(data);
      this.paciente = data;
    });
  }
}
