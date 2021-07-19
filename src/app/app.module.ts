import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MetafrenzyModule } from 'ngx-metafrenzy';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './pages/main/main.module';
import { UneteComoVoluntarioComponent } from './pages/unete-como-voluntario/unete-como-voluntario.component';

@NgModule({
  declarations: [
    AppComponent,
    UneteComoVoluntarioComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    MetafrenzyModule.forRoot(),
    HttpClientModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
