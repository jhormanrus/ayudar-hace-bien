import { AfterViewInit, Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-centros-acopio',
  templateUrl: './centros-acopio.component.html',
  styleUrls: ['./centros-acopio.component.scss']
})
export class CentrosAcopioComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    $('body').addClass('loaded')
  }

  goTo(id: string) {
    setTimeout(() => {
      window.document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }
}
