import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'recordatorios',
    loadChildren: () =>
      import('./pages/recordatorios/recordatorios.module').then(
        (m) => m.RecordatoriosPageModule
      ),
  },
  {
    path: 'registro-consulta',
    loadChildren: () =>
      import('./pages/registro-consulta/registro-consulta.module').then(
        (m) => m.RegistroConsultaPageModule
      ),
  },
  {
    path: 'consulta-paciente',
    loadChildren: () =>
      import('./pages/consulta-paciente/consulta-paciente.module').then(
        (m) => m.ConsultaPacientePageModule
      ),
  },
  {
    path: 'modulo-prevencion',
    loadChildren: () =>
      import('./pages/modulo-prevencion/modulo-prevencion.module').then(
        (m) => m.ModuloPrevencionPageModule
      ),
  },
  {
    path: 'consulta-pacientes',
    loadChildren: () =>
      import('./pages/consulta-pacientes/consulta-pacientes.module').then(
        (m) => m.ConsultaPacientesPageModule
      ),
  },
  {
    path: 'registro-paciente',
    loadChildren: () =>
      import('./pages/registro-paciente/registro-paciente.module').then(
        (m) => m.RegistroPacientePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
