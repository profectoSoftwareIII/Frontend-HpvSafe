import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-paciente',
  templateUrl: './registro-paciente.page.html',
  styleUrls: ['./registro-paciente.page.scss'],
})
export class RegistroPacientePage implements OnInit {

  paciente: FormGroup = new FormGroup({});


  constructor(private formBuilder: FormBuilder,
    private alertController: AlertController,
    private router: Router) {

    this.paciente = this.formBuilder.group({
      A: ['', []],
      B: ['', []],
      C: ['', []],
      D: ['', []],
      E: ['', []],
      F: ['', []],
      G: ['', []],
    });

  }

  ngOnInit() {
  }

  async register() {
    ///const modelo: RegistroConsulta = new RegistroConsulta();
    ///modelo.medico_id = 1;
    //modelo.paciente_id = this.recordatorio.controls['paciente_id']?.value;
    //modelo.tratamiento_id = this.recordatorio.controls['tratamiento_id']?.value;
    //modelo.descripcion = this.recordatorio.controls['descripcion'].value;
    //modelo.nombre_diagnostico = this.recordatorio.controls['nombre_diagnostico'].value;
    //modelo.fecha = this.recordatorio.controls['fecha'].value;



    console.log(this.paciente.value)

    this.presentAlert(
      'Registro exitoso de persona',
      '',
      'my-custom-class-success',
      '/home'
    )
  }

  async presentAlert(msg: string, titulo: string, cssClase: any, ruta: string ){
    const alert = await this.alertController.create({
      cssClass: cssClase,
      header: titulo,
      subHeader: '',
      message: msg,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.router.navigate([ruta]);
            console.log('Confirm Okay');
          },
        },
      ],
      mode: 'ios',
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  cancelar(){
    console.log('error')
  }

}
