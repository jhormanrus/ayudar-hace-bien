import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {

  year = new Date().getFullYear() //* Current year for footer

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script')
    tag.src = "https://www.youtube.com/iframe_api"
    document.body.appendChild(tag)
  }

  ngAfterViewInit(): void {
    $('body').addClass('loaded')
  }
}
