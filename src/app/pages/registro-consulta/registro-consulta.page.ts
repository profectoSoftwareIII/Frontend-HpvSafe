import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RegistroConsulta } from 'src/app/models/registro-consulta.model';
import { RegistroConsultaService } from 'src/app/services/registro-consulta.service';

@Component({
  selector: 'app-registro-consulta',
  templateUrl: './registro-consulta.page.html',
  styleUrls: ['./registro-consulta.page.scss'],
})
export class RegistroConsultaPage implements OnInit {

  recordatorio: FormGroup = new FormGroup({});

  constructor(private registroConsultaService: RegistroConsultaService,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private router: Router) { 

    this.recordatorio = this.formBuilder.group({
      medico_id: ['', []],
      paciente_id: ['', []],
      tratamiento_id: [''],
      descripcion: ['', [Validators.required]],
      nombre_diagnostico: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  async register() {
    const modelo: RegistroConsulta = new RegistroConsulta();
    modelo.medico_id = 1;
    modelo.paciente_id = this.recordatorio.controls['paciente_id']?.value;
    modelo.tratamiento_id = this.recordatorio.controls['tratamiento_id']?.value;
    modelo.descripcion = this.recordatorio.controls['descripcion'].value;
    modelo.nombre_diagnostico = this.recordatorio.controls['nombre_diagnostico'].value;
    modelo.fecha = this.recordatorio.controls['fecha'].value;

    console.log(modelo)
    this.registroConsultaService.postRecordario(modelo).subscribe(
      (datos) => {
        console.log('Registro almacenado correctamente.');
        this.presentAlert(
          'Registro exitoso de recordatorio',
          '',
          'my-custom-class-success',
          '/home'
        );
      },
      (err: any) => {
        this.presentAlert(
          'Registro no exitoso de recordatorio',
          '',
          'my-custom-class-success',
          '/registro-consulta'
        );
      }
    );
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
