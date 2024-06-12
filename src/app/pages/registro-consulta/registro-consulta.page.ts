import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RegistroConsulta } from 'src/app/models/registro-consulta.model';
import { RegistroConsultaService } from 'src/app/services/registro-consulta.service';
import { ConsultasPacienteService } from 'src/app/services/consultas-paciente.service';

@Component({
  selector: 'app-registro-consulta',
  templateUrl: './registro-consulta.page.html',
  styleUrls: ['./registro-consulta.page.scss'],
})
export class RegistroConsultaPage implements OnInit {
  recordatorio: FormGroup = new FormGroup({});

  pacientes: any[] = [];
  tratamientos: any[] = [];
  id_medico: number = 1; //CAMBIAR LUEGO POR EL ID DEL MEDICO QUE ESTA LOGUEADO

  constructor(
    private registroConsultaService: RegistroConsultaService,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private router: Router,
    private consultaPacienteService: ConsultasPacienteService
  ) {
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
    this.getTratamientos();
    this.getPacientes();
  }

  async register() {
    const modelo: RegistroConsulta = new RegistroConsulta();
    modelo.medico_id = 1;
    modelo.paciente_id = this.recordatorio.controls['paciente_id']?.value;
    modelo.tratamiento_id = this.recordatorio.controls['tratamiento_id']?.value;
    modelo.descripcion = this.recordatorio.controls['descripcion'].value;
    modelo.nombre_diagnostico =
      this.recordatorio.controls['nombre_diagnostico'].value;
    modelo.fecha = this.recordatorio.controls['fecha'].value;

    console.log(modelo);
    this.registroConsultaService.postRecordario(modelo).subscribe(
      (datos) => {
        console.log('Registro almacenado correctamente.');
        this.presentAlert(
          'Registro exitoso de consulta',
          '',
          'my-custom-class-success',
          '/home'
        );
      },
      (err: any) => {
        this.presentAlert(
          'Error al registrar consulta',
          '',
          'my-custom-class-success',
          '/registro-consulta'
        );
      }
    );
  }

  async presentAlert(msg: string, titulo: string, cssClase: any, ruta: string) {
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

  cancelar() {
    console.log('error');
  }

  getTratamientos() {
    this.registroConsultaService.getTratamiento().subscribe(
      (datos) => {
        this.tratamientos = datos;
        console.log(this.tratamientos);
      },
      (err: any) => {
        console.log('Error al obtener los tratamientos');
      }
    );
  }

  getPacientes() {
    this.consultaPacienteService.getPacientesMedico(this.id_medico).subscribe(
      (datos) => {
        this.pacientes = datos.pacientes;
        console.log('datos obtenidos');
        console.log(datos);
        console.log('datos pacientes');
        console.log(datos.pacientes);
      },
      (err: any) => {
        console.log('Error al obtener los pacientes');
      }
    );
  }
}
