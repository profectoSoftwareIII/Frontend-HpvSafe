import { Component, OnInit } from '@angular/core';
import { ModuloPrevencionService } from 'src/app/services/modulo-prevencion.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-modulo-prevencion',
  templateUrl: './modulo-prevencion.page.html',
  styleUrls: ['./modulo-prevencion.page.scss'],
})
export class ModuloPrevencionPage implements OnInit {

  cartas: any[] = [
  ];

  constructor(private moduloService:ModuloPrevencionService,) { }

  ngOnInit() {
    this.getArticulosPagina();
  }

  verMas(carta: any) {
    // Lógica para mostrar detalles de la carta (por ejemplo, navegar a otra página)
    console.log('Ver más de:', carta);
  }


  getArticulosPagina(){
    this.moduloService.getArticulosPrevencion().subscribe(
      (datos) => {
        this.cartas = datos;
        console.log(this.cartas);
      },
      (err: any) => {
        console.log('Error al obtener la lista de pacientes');
      }
    );
  }

}
