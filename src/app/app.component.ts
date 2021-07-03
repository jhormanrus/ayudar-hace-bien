import { Component } from '@angular/core';

@Component({
  selector: 'ayudar-hace-bien-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  year = new Date().getFullYear() //* Current year for footer

  goTo(id: string) {
    setTimeout(() => {
      window.document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }
}
