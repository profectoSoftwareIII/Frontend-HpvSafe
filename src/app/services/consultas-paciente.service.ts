import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultasPacienteService {
  constructor(private http: HttpClient) {}

  /**
   * Retrieves the consultations for a specific patient.
   * @param id - The ID of the patient.
   * @returns An Observable that emits the consultations data.
   */
  getConsultasPaciente(id: number): Observable<any> {
    return this.http
      .get<any>(`${environment.linkServidor}consulta/consultasPaciente/${id}`)
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

  /**
   * Retrieves the patients associated with a specific doctor.
   * @param id - The ID of the doctor.
   * @returns An Observable that emits the response data.
   */

  //SE PUEDE ORGANIZAR LUEGO PARA QUE SE MUESTREN LOS PACIENTES DE UN MEDICO EN PAGINAS SI SON MUCHOS PACIENTES?
  getPacientesMedico(id: number): Observable<any> {
    return this.http
      .get<any>(`${environment.linkServidor}medico/all_patiens_by_doctor/${id}`)
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
    return this.http.get<any>(
      `${environment.linkServidor}paciente/pacientes_all`
    );
  }
}
