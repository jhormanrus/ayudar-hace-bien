import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Data } from 'src/app/services/data.model';
import { MainService } from 'src/app/services/main.service';
declare var $: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {
  
  data: Data

  constructor(private sMain: MainService, private router: Router) { }

  ngOnInit(): void {
    this.sMain.readData().pipe(take(1)).subscribe(response => {
      this.data = response
    })
  }

  ngAfterViewInit(): void {
    $('body').addClass('loaded')
  }

  goHome() {
    this.router.navigate(['como-donar'])
    $('body').removeClass('loaded')
  }

  goTo(id: string) {
    setTimeout(() => {
      window.document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }
}
