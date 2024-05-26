import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasPacienteService {

  constructor(private http:HttpClient) { }




  getConsultasPaciente(id: number): Observable<any> {

    return this.http
      .get<any>(`${environment.linkServidor}consulta/consultaPaciente/${id}`)
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
