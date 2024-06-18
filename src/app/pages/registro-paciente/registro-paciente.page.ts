import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { RegistroPaciente } from 'src/app/models/recordatorio.model';
import { RegistroConsultaService } from 'src/app/services/registro-consulta.service';

@Component({
  selector: 'app-registro-paciente',
  templateUrl: './registro-paciente.page.html',
  styleUrls: ['./registro-paciente.page.scss'],
})
export class RegistroPacientePage {
  paciente: FormGroup;
  id_medico: number = 1; // Cambiar por el id del medico logueado luego

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private router: Router,
    private registroService: RegistroConsultaService
  ) {
    this.paciente = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(200)]],
      apellido: ['', [Validators.required, Validators.maxLength(200)]],
      cedula: ['', [Validators.required, Validators.maxLength(200)]], // Assuming cedula is alphanumeric
      edad: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.max(150),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      telefono: ['', [Validators.required, Validators.maxLength(200)]],
      email: ['', [Validators.required, Validators.email]],
      tipo_hpv: [''],
      genero: ['', Validators.required],
    });
  }

  async register() {
    if (this.paciente.invalid) {
      await this.presentToast(
        'Por favor completa todos los campos correctamente',
        'danger',
        'middle'
      );
      return;
    }

    const modelo: RegistroPaciente = new RegistroPaciente(
      this.paciente.controls['nombre'].value,
      this.paciente.controls['apellido'].value,
      this.paciente.controls['cedula'].value,
      this.paciente.controls['edad'].value,
      this.paciente.controls['telefono'].value,
      this.paciente.controls['email'].value,
      this.paciente.controls['genero'].value,
      this.paciente.controls['tipo_hpv'].value
    );

    this.registroService.postPaciente(modelo).subscribe({
      next: async (datos) => {
        console.log('Registro almacenado correctamente.', datos);
        await this.presentToast('Registro exitoso', 'success', 'bottom');
        this.paciente.reset();
      },
      error: async (err: any) => {
        console.error('Error al registrar el paciente', err);
        await this.presentToast(
          'No se pudo registrar el paciente',
          'danger',
          'middle'
        );
        this.router.navigate(['/registro-paciente']);
      },
    });
  }

  async presentToast(
    msg: string,
    color: 'success' | 'danger',
    position: 'middle' | 'bottom'
  ) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: color,
      icon: color === 'success' ? 'checkmark-circle' : 'close-circle',
      position: position,
    });
    toast.present();
  }

  cancelar() {
    console.log('error');
  }
}
