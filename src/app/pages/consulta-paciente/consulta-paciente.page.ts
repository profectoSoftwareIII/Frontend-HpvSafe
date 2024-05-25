import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ConsultasPacienteService } from 'src/app/services/consultas-paciente.service';

@Component({
  selector: 'app-consulta-paciente',
  templateUrl: './consulta-paciente.page.html',
  styleUrls: ['./consulta-paciente.page.scss'],
})


export class ConsultaPacientePage implements OnInit {

  textoBusqueda = ''; // Variable para almacenar el texto de búsqueda
  recordatorios:any = [];
  recordatorios2:any = [];


  constructor(private consultaService:ConsultasPacienteService) { }

  ngOnInit() {
    this.prueba(2);
  }

  buscar() {
    console.log("Texto buscado:", this.textoBusqueda);
    // Aquí puedes agregar la lógica de filtrado de recordatorios
  }



  prueba(id: number) {
    this.consultaService
      .getConsultasPaciente(id)
      .pipe(tap((data) => (this.recordatorios = data)))
      .subscribe();
  }

}
