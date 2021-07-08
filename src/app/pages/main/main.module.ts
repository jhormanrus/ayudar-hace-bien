import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main.routing';
import { InicioComponent } from './components/inicio/inicio.component';
import { YapeComponent } from './components/yape/yape.component';
import { BcpComponent } from './components/bcp/bcp.component';
import { BbvaComponent } from './components/bbva/bbva.component';
import { MainComponent } from './main.component';
import { MetafrenzyModule } from 'ngx-metafrenzy';

@NgModule({
  declarations: [
    MainComponent,
    InicioComponent,
    YapeComponent,
    BcpComponent,
    BbvaComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MetafrenzyModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
