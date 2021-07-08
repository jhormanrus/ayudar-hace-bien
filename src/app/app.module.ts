import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MetafrenzyModule } from 'ngx-metafrenzy';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PorqueAyudarComponent } from './pages/porque-ayudar/porque-ayudar.component';
import { ComoAyudarComponent } from './pages/como-ayudar/como-ayudar.component';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './pages/main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PorqueAyudarComponent,
    ComoAyudarComponent
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
