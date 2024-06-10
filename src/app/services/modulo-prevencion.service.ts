import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RegistroConsulta } from '../models/registro-consulta.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModuloPrevencionService {

  constructor(private http: HttpClient) { }


  /**
   * Retrieves the articles for prevention.
   * @returns An observable that emits the response data.
   */
  getArticulosPrevencion(): Observable<any> {

    return this.http
      .get<any>(`${environment.linkServidor}publicacion/publicacion_all/`)
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
