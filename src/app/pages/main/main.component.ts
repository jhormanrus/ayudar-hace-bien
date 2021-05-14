import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements AfterViewInit {

  year = new Date().getFullYear() //* Current year for footer
  main = '/donaciones'
  yape = '/donaciones/yape'
  bcp = '/donaciones/bcp'
  bbva = '/donaciones/bbva'

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    $('body').addClass('loaded')
  }

  openFacebook() {
    if (this.router.url === this.main) {
      window.open('http://www.facebook.com/sharer.php?u=https%3A%2F%2Fayudarhacebien.pe','popup','width=600,height=430')
    } else if (this.router.url === this.yape) {
      window.open('http://www.facebook.com/sharer.php?u=https%3A%2F%2Fayudarhacebien.pe%2Fdonaciones%2Fyape','popup','width=600,height=430')
    } else if (this.router.url === this.bcp) {
      window.open('http://www.facebook.com/sharer.php?u=https%3A%2F%2Fayudarhacebien.pe%2Fdonaciones%2Fbcp','popup','width=600,height=430')
    } else if (this.router.url === this.bbva) {
      window.open('http://www.facebook.com/sharer.php?u=https%3A%2F%2Fayudarhacebien.pe%2Fdonaciones%2Fbbva','popup','width=600,height=430')
    }
  }

  openWhatsapp() {
    if (this.router.url === this.main) {
      window.open('https://api.whatsapp.com/send?text=%23AyudarHaceBien%20https%3A%2F%2Fayudarhacebien.pe%20dona%20y%20comparte')
    } else if (this.router.url === this.yape) {
      window.open('https://api.whatsapp.com/send?text=%23AyudarHaceBien%20https%3A%2F%2Fayudarhacebien.pe%2Fdonaciones%2Fyape%20dona%20desde%20el%20app%20de%20Yape')
    } else if (this.router.url === this.bcp) {
      window.open('https://api.whatsapp.com/send?text=%23AyudarHaceBien%20https%3A%2F%2Fayudarhacebien.pe%2Fdonaciones%2Fbcp%20dona%20desde%20el%20app%20del%20BCP')
    } else if (this.router.url === this.bbva) {
      window.open('https://api.whatsapp.com/send?text=%23AyudarHaceBien%20https%3A%2F%2Fayudarhacebien.pe%2Fdonaciones%2Fbbva%20dona%20desde%20el%20app%20del%20BBVA')
    }
  }

  openTwitter() {
    if (this.router.url === this.main) {
      window.open('https://twitter.com/intent/tweet?text=%23AyudarHaceBien%20https%3A%2F%2Fayudarhacebien.pe%20dona%20y%20comparte','popup','width=600,height=430')
    } else if (this.router.url === this.yape) {
      window.open('https://twitter.com/intent/tweet?text=%23AyudarHaceBien%20https%3A%2F%2Fayudarhacebien.pe%2Fdonaciones%2Fyape%20dona%20desde%20el%20app%20de%20Yape','popup','width=600,height=430')
    } else if (this.router.url === this.bcp) {
      window.open('https://twitter.com/intent/tweet?text=%23AyudarHaceBien%20https%3A%2F%2Fayudarhacebien.pe%2Fdonaciones%2Fbcp%20dona%20desde%20el%20app%20del%20BCP','popup','width=600,height=430')
    } else if (this.router.url === this.bbva) {
      window.open('https://twitter.com/intent/tweet?text=%23AyudarHaceBien%20https%3A%2F%2Fayudarhacebien.pe%2Fdonaciones%2Fbbva%20dona%20desde%20el%20app%20del%20BBVA','popup','width=600,height=430')
    }
  }
}
