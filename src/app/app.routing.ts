import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CentrosAcopioComponent } from './pages/centros-acopio/centros-acopio.component';
import { UneteComoVoluntarioComponent } from './pages/unete-como-voluntario/unete-como-voluntario.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
  { path: 'unete-como-voluntario', component: UneteComoVoluntarioComponent },
  { path: 'centrosdeacopio', component: CentrosAcopioComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
