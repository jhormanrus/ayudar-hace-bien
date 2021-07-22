import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ayudar-hace-bien-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

  year = new Date().getFullYear() //* Current year for footer

  constructor(private router: Router) { }

  goTo(id: string) {
    setTimeout(() => {
      window.document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

  inUneteComoVoluntario() {
    if (this.router.url === '/unete-como-voluntario') {
      return true
    }
    return false
  }
}
