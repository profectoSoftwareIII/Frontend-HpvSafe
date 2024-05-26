import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RegistroConsulta } from '../models/registro-consulta.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroConsultaService {

  constructor(private http: HttpClient) { }

  postRecordario(modelo: RegistroConsulta): Observable<RegistroConsulta> {
    return this.http.post<RegistroConsulta>(`${environment.linkServidor}consulta/registrarConsulta`, {
      paciente_id: modelo.paciente_id,
      medico_id: 1,
      tratamiento_id: modelo.tratamiento_id,
      nombre_diagnostico: modelo.nombre_diagnostico,
      descripcion: modelo.descripcion,
      fecha: modelo.fecha
    });
  }

  getTratamiento(): Observable<any> {

    return this.http
      .get<any>(`${environment.linkServidor}consulta/tratamientos_all/`)
      .pipe(
        map((data) => {
          if (data) {
            return data;
          } else {
            return {};
          }
        })
      );
}

getPacientes(): Observable<any> {

  return this.http
    .get<any>(`${environment.linkServidor}paciente/pacientes_all/`)
    .pipe(
      map((data) => {
        if (data) {
          return data;
        } else {
          return {};
        }
      })
    );
}



}
