import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MetafrenzyModule } from 'ngx-metafrenzy';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MetafrenzyModule.forRoot(),
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
