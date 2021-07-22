import { Component, OnInit } from '@angular/core';
import { MetafrenzyService } from 'ngx-metafrenzy';
declare var ClipboardJS: any;
declare var $: any;

@Component({
  selector: 'salvando-con-diez-bcp',
  templateUrl: './bcp.component.html',
  styles: []
})
export class BcpComponent implements OnInit {

  os: string

  constructor(private readonly metafrenzyService: MetafrenzyService) {
    this.metafrenzyService.setMetaTag('theme-color', '#FF6944')
    this.metafrenzyService.setOpenGraph({
      title: 'Ayudar hace bien - BCP - Colecta de ADRA PERÚ',
      site_name: 'AyudarHaceBien',
      url: 'http://ayudarhacebien.pe/bcp',
      'image:secure_url': 'https://i.ibb.co/6Zr9yMB/bcp.jpg',
      'image:width': '960',
      'image:height': '500'
    })
  }

  ngOnInit(): void {
    const clipboard = new ClipboardJS('.copy')
    $('[data-toggle="tooltip"]').tooltip({
      animated: 'fade',
      placement: 'bottom',
      trigger: 'click',
      container: '.form-group'
    })
    window.location.hash = '#comodonar'
  }

  hideTooltip() {
    setTimeout(() => { $('[data-toggle="tooltip"]').tooltip('hide') }, 1000)
  }

  openApp() {
    if (this.os === 'android') {
      window.open('intent://com.bcp.bank.bcp/#Intent;scheme=launch;package=com.bcp.bank.bcp;S.content=WebContent;end')
    } else if (this.os === 'ios') {
      window.open('https://apps.apple.com/pe/app/banca-móvil-bcp/id777961079')
    }
  }

  openWeb() {
    window.open('https://www.viabcp.com/canales/banca-por-internet', '_blank')
  }

  isPhone() {
    const userAgent = navigator.userAgent || navigator.vendor
    if (/android/i.test(userAgent)) {
      this.os = 'android'
      return true
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      this.os = 'ios'
      return true
    }
    return false
  }
}
