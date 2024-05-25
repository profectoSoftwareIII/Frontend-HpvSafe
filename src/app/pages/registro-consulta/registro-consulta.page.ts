import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-consulta',
  templateUrl: './registro-consulta.page.html',
  styleUrls: ['./registro-consulta.page.scss'],
})
export class RegistroConsultaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registrar(){
    console.log('hola')
  }

  cancelar(){
    console.log('error')
  }

}
