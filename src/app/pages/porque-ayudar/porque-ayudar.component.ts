import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { take } from 'rxjs/operators';
import { Sonrisas } from 'src/app/services/data.model';
declare var $: any;

@Component({
  selector: 'app-porque-ayudar',
  templateUrl: './porque-ayudar.component.html',
  styleUrls: ['./porque-ayudar.component.scss']
})
export class PorqueAyudarComponent implements AfterViewInit, OnInit {

  links: Sonrisas

  constructor(private sMain: MainService) { }

  ngOnInit(): void {
    this.sMain.readData().pipe(take(1)).subscribe(response => {
      this.links = response.sonrisas
    })
  }

  ngAfterViewInit(): void {
    $('body').addClass('loaded')
  }

  openLink(link: string) {
    window.open(`https://www.youtube.com/watch?v=${link}`, '_blank')
  }
}
