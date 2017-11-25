import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  images = [
    {
      src: 'assets/imgs/banner-1-06.png',
      captionImage: 'assets/imgs/page-1.svg',
      title: 'The Content Gamification Platform for your Enterprise',
      desc: '. ENGAGE . REACH . CONVERT . RETAIN . ANALYSE .'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
