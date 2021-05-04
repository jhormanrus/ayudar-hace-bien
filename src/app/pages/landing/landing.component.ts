import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {

  year = new Date().getFullYear() //* Current year for footer
  appOrientation: number

  constructor(private router: Router) { }

  ngOnInit(): void {
    const appHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    const appOrientation = () => {
      this.appOrientation = screen.orientation.angle
    }
    window.addEventListener('resize', appHeight)
    window.addEventListener("orientationchange", appOrientation)
    appHeight()
    appOrientation()

    const tag = document.createElement('script')
    tag.src = "https://www.youtube.com/iframe_api"
    document.body.appendChild(tag)
  }

  ngAfterViewInit(): void {
    $('body').addClass('loaded')
  }

  goHome() {
    this.router.navigate(['h'])
    $('body').removeClass('loaded')
  }
}
