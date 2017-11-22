import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links = [
    'Benefits', 'Gamiphy', 'How it works', 'Contact us', 'Pricing'
  ];

  lng = 'en';
  constructor() { }

  ngOnInit() {
  }

}
