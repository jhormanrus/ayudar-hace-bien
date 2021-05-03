import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BbvaComponent } from './components/bbva/bbva.component';
import { BcpComponent } from './components/bcp/bcp.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { YapeComponent } from './components/yape/yape.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', component: InicioComponent },
      { path: 'yape', component: YapeComponent },
      { path: 'bcp', component: BcpComponent },
      { path: 'bbva', component: BbvaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
