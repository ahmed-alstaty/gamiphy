import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits-section',
  templateUrl: './benefits-section.component.html',
  styleUrls: ['./benefits-section.component.scss']
})
export class BenefitsSectionComponent implements OnInit {
  assetsBaseUrl = environment.assetsBaseUrl;
  constructor() { }

  ngOnInit() {
  }

}
