import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gamiphy-benefit-element',
  templateUrl: './gamiphy-benefit-element.component.html',
  styleUrls: ['./gamiphy-benefit-element.component.scss']
})
export class GamiphyBenefitElementComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('img-src') imgSrc: string;
  @Input('title') title: string;
  @Input('description') description: string;
  constructor() { }

  ngOnInit() {
  }

}
