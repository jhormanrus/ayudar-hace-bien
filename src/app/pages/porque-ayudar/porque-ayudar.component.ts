import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;

interface ILinks {
  title:string;
  urlImg:string;
  link:string;
}

@Component({
  selector: 'app-porque-ayudar',
  templateUrl: './porque-ayudar.component.html',
  styleUrls: ['./porque-ayudar.component.scss']
})
export class PorqueAyudarComponent implements AfterViewInit {
  title:string = "Sonrisas Compartidas"
  links:ILinks[] = [
    {
      title:"Entrega de Bono Cash Transfer en Iquitos",
      urlImg:"./../../../assets/img/video.png",
      link:""
    },
    {
      title:"Entrega de Kits de Higiene y de alimentos en Tacna",
      urlImg:"./../../../assets/img/video.png",
      link:""
    },
    {
      title:"Entrega de Kits de Alimentos de Emergencia en Madre de Dios",
      urlImg:"./../../../assets/img/video.png",
      link:""
    },
  ]
  constructor() { }

  ngAfterViewInit(): void {
    $('body').addClass('loaded')
  }


}
