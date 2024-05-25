import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'consulta',
    loadChildren: () =>
      import('./consulta/consulta.module').then((m) => m.ConsultaModule),
  },
  {
    path: 'recordatorio',
    loadChildren: () =>
      import('./recordatorio/recordatorio.module').then(
        (m) => m.RecordatorioModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'recordatorios',
    loadChildren: () => import('./pages/recordatorios/recordatorios.module').then( m => m.RecordatoriosPageModule)
  },
  {
    path: 'registro-consulta',
    loadChildren: () => import('./pages/registro-consulta/registro-consulta.module').then( m => m.RegistroConsultaPageModule)
  },
  {
    path: 'consulta-paciente',
    loadChildren: () => import('./pages/consulta-paciente/consulta-paciente.module').then( m => m.ConsultaPacientePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
