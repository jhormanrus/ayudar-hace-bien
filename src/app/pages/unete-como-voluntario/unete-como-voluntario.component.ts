import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-unete-como-voluntario',
  templateUrl: './unete-como-voluntario.component.html',
  styleUrls: ['./unete-como-voluntario.component.scss']
})
export class UneteComoVoluntarioComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $('body').addClass('loaded')
  }
}
