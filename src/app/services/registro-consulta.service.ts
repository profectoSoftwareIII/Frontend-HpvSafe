import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroConsulta } from '../models/registro-consulta.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroConsultaService {

  constructor(private http: HttpClient) { }

  postRecordario(modelo: RegistroConsulta): Observable<RegistroConsulta> {
    return this.http.post<RegistroConsulta>(`${environment.linkServidor}consulta/registrarConsulta`, {
      paciente_id: 1,
      medico_id: 1,
      tratamiento_id: 1,
      nombre_diagnostico: modelo.nombre_diagnostico,
      descripcion: modelo.descripcion,
      fecha: modelo.fecha
    });
  }
}
