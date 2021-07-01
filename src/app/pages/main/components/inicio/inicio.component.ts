import { Component } from '@angular/core';
import { MetafrenzyService } from 'ngx-metafrenzy';

@Component({
  selector: 'salvando-con-diez-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  constructor(private readonly metafrenzyService: MetafrenzyService) {
    this.metafrenzyService.setMetaTag('theme-color', '#007B5F')
    this.metafrenzyService.setOpenGraph({
      title: '#AyudarHaceBien',
      site_name: 'AyudarHaceBien',
      url: 'http://ayudarhacebien.pe/como-donar',
      'image:secure_url': 'https://i.ibb.co/pXNB4tP/COMPARTE-REDES-SOCIALES-IMAGEN-PREVIA.png',
      'image:width': '960',
      'image:height': '500'
    })
  }
}
