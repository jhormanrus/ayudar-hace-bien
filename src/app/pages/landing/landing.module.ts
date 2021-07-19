import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing.routing';
import { LandingComponent } from './landing.component';
import { ComoAyudarComponent } from './components/como-ayudar/como-ayudar.component';
import { PorqueAyudarComponent } from './components/porque-ayudar/porque-ayudar.component';

@NgModule({
  declarations: [
    LandingComponent,
    ComoAyudarComponent,
    PorqueAyudarComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
