import { Injectable } from '@angular/core';
import { Recordatorio } from '../models/recordatorio.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordatorioService {

  constructor(private http: HttpClient) { }
  postRecordario(modelo: Recordatorio): Observable<Recordatorio> {
    return this.http.post<Recordatorio>(`${environment.linkServidor}registrarRecordatorio`, {
      paciente_id: modelo.paciente_id,
      medico_id: modelo.medico_id,
      tipo_recordatorio: modelo.tipo_recordatorio,
      descripcion: modelo.descripcion,
      fecha: modelo.fecha
    });
  }
}
