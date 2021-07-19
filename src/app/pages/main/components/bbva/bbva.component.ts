import { Component, OnInit } from '@angular/core';
import { MetafrenzyService } from 'ngx-metafrenzy';
declare var ClipboardJS: any;
declare var $: any;

@Component({
  selector: 'salvando-con-diez-bbva',
  templateUrl: './bbva.component.html',
  styles: []
})
export class BbvaComponent implements OnInit {

  os: string

  constructor(private readonly metafrenzyService: MetafrenzyService) {
    this.metafrenzyService.setMetaTag('theme-color', '#002048')
    this.metafrenzyService.setOpenGraph({
      title: '#AyudarHaceBien - BBVA',
      site_name: 'AyudarHaceBien',
      url: 'http://ayudarhacebien.pe/bbva',
      'image:secure_url': 'https://i.ibb.co/QcW36vM/bbva.jpg',
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
      window.open('intent://com.bbva.nxt_peru/#Intent;scheme=launch;package=com.bbva.nxt_peru;S.content=WebContent;end')
    } else if (this.os === 'ios') {
      window.open('https://apps.apple.com/pe/app/bbva-perú/id569453542')
    }
  }

  openWeb() {
    window.open('https://www.bbva.pe', '_blank')
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
