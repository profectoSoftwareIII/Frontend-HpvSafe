import { Component, OnInit } from '@angular/core';
import { ConsultasPacienteService } from 'src/app/services/consultas-paciente.service';

@Component({
  selector: 'app-consulta-pacientes',
  templateUrl: './consulta-pacientes.page.html',
  styleUrls: ['./consulta-pacientes.page.scss'],
})
export class ConsultaPacientesPage implements OnInit {
  id_medico: number = 1; //Cambiar luego a un valor que se obtenga del usuario logueado
  datos_medico: any[] = []; //Datos de prueba, no son necesarios luego
  pacientes: any[] = [];
  pacienteSeleccionado: any = []; // Paciente inicial

  constructor(private consultaService: ConsultasPacienteService) {}

  ngOnInit() {
    //Obtener los pacientes de un médico
    this.getPacientesDeUnMedico();
  }

  /**
   * Retrieves the patients associated with a specific doctor.
   * Subscribes to the `getPacientesMedico` method of the `consultaService` and assigns the retrieved data to `this.pacientes`.
   * Logs the `this.pacientes` to the console.
   * Logs an error message if there is an error while retrieving the list of patients.
   */

  //CAMBIAR LUEGO PARA QUE NO SOLICITE TODOS LOS PACIENTES
  getPacientesDeUnMedico() {
    this.consultaService.getPacientesMedico(this.id_medico).subscribe(
      (datos) => {
        this.datos_medico = datos.medico;
        this.pacientes = datos.pacientes;

        if (this.pacientes.length > 0) {
          this.pacienteSeleccionado = this.pacientes[0];
        }

        console.log('Datos medico:');
        console.log(this.datos_medico);
        console.log('Datos paciente:');
        console.log(this.pacientes);
      },
      (err: any) => {
        console.log('Error al obtener la lista de pacientes');
      }
    );
  }

  cambiarPaciente(event: any) {
    this.pacienteSeleccionado = this.pacientes.find(
      (p) => p.nombre === event.detail.value
    );
  }
}
