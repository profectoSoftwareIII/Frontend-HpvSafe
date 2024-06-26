import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recordatorio } from 'src/app/models/recordatorio.model';
import { ConsultasPacienteService } from 'src/app/services/consultas-paciente.service';
import { RecordatorioService } from 'src/app/services/recordatorio.service';
import { RegistroConsultaService } from 'src/app/services/registro-consulta.service';

//ORGANIZAR LUEGO AVISO DE MENSAJE DE QUE DEBE SER EN LA FECHA INDICADA Y DE QUE LOS DATOS NO ESTAN CORRECTOS

@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.page.html',
  styleUrls: ['./recordatorios.page.scss'],
})
export class RecordatoriosPage implements OnInit {
  recordatorio: FormGroup = new FormGroup({});
  pacientes: any[] = [];
  id_medico: number = 1; //CAMBIAR LUEGO POR EL ID DEL MEDICO QUE ESTA LOGUEADO

  constructor(
    private recordatorioService: RecordatorioService,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private router: Router,
    private registroConsultaService: RegistroConsultaService,
    private consultaPacienteService: ConsultasPacienteService
  ) {
    this.recordatorio = this.formBuilder.group({
      medico_id: ['', []],
      paciente_id: ['', []],
      tipo_recordatorio: [''],
      descripcion: [
        '',
        [
          Validators.required,
          Validators.maxLength(200),
          Validators.minLength(1),
        ],
      ],
      fecha: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.getPacientes();
  }

  async register() {
    const modelo: Recordatorio = new Recordatorio();
    modelo.medico_id = 1;
    modelo.paciente_id = this.recordatorio.controls['paciente_id']?.value;
    modelo.tipo_recordatorio =
      this.recordatorio.controls['tipo_recordatorio'].value;
    modelo.descripcion = this.recordatorio.controls['descripcion'].value;
    modelo.fecha = this.recordatorio.controls['fecha'].value;

    console.log(modelo);
    this.recordatorioService.postRecordario(modelo).subscribe(
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
          '/recordatorios'
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
