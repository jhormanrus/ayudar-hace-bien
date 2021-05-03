import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsMobileGuard } from './guards/is-mobile.guard';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  { path: 'h', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
  { path: '', component: LandingComponent, canActivate: [IsMobileGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
