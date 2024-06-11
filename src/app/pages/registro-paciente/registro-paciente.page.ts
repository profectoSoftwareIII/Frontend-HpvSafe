import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RegistroPaciente } from 'src/app/models/recordatorio.model';
import { RecordatorioService } from 'src/app/services/recordatorio.service';
import { RegistroConsultaService } from 'src/app/services/registro-consulta.service';

@Component({
  selector: 'app-registro-paciente',
  templateUrl: './registro-paciente.page.html',
  styleUrls: ['./registro-paciente.page.scss'],
})
export class RegistroPacientePage implements OnInit {

  paciente: FormGroup = new FormGroup({});
  id_medico: number = 1;//Cambiar por el id del medico logueado luego


  constructor(private formBuilder: FormBuilder,
    private alertController: AlertController,
    private router: Router,
    private registroService: RegistroConsultaService) {



    this.paciente = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(200)]],
      apellido: ['', [Validators.required, Validators.maxLength(200)]],
      cedula: ['', [Validators.required, Validators.maxLength(200)]], // Assuming cedula is alphanumeric
      edad: ['', [Validators.required, Validators.min(0), Validators.max(150), Validators.pattern('^[0-9]*$')]],
      telefono: ['', [Validators.required, Validators.maxLength(200)]], 
      email: ['', [Validators.required, Validators.email]],
      tipo_hpv: ['', [Validators.required, Validators.maxLength(200)]],

    });

  }

  ngOnInit() {
  }

  async register() {
    const modelo: RegistroPaciente = new RegistroPaciente();


    modelo.doctor_id = 1;
    modelo.nombre = this.paciente.controls['nombre'].value;
    modelo.apellido = this.paciente.controls['apellido'].value;
    modelo.cedula = this.paciente.controls['cedula'].value;
    modelo.edad = this.paciente.controls['edad'].value;
    modelo.telefono = this.paciente.controls['telefono'].value;
    modelo.email = this.paciente.controls['email'].value;
    modelo.tipo_hpv = this.paciente.controls['tipo_hpv'].value;


    //Agregar alternativa de mensaje si los campos estan incorrectos antes de enviar el mensaje

    console.log(modelo)
    this.registroService.postPaciente(modelo).subscribe(
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
          'No se pudo registrar el paciente',
          '',
          'my-custom-class-success',
          '/registro-paciente'
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
