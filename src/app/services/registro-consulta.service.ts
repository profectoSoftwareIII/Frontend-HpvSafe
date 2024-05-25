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
    return this.http.post<RegistroConsulta>(`${environment.linkServidor}registrarConsulta`, {
      paciente_id: modelo.paciente_id,
      medico_id: modelo.medico_id,
      tratamiento_id: modelo.tratamiento_id,
      nombre_diagnostico: modelo.nombre_diagnostico,
      descripcion: modelo.descripcion,
      fecha: modelo.fecha
    });
  }
}
