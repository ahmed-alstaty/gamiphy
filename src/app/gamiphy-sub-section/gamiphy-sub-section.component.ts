import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gamiphy-sub-section',
  templateUrl: './gamiphy-sub-section.component.html',
  styleUrls: ['./gamiphy-sub-section.component.scss']
})
export class GamiphySubSectionComponent implements OnInit {
  /**
   * [background-color]="red"
          [direction]="ltr"
          [img]="img"
          [title]="title"
          [text]="text"></app-gamiphy-sub-section>
   */

  // tslint:disable-next-line:no-input-rename
  @Input('background-color') backgroundColor: string;
  @Input('img') img: string;
  @Input('title') title: string;
  @Input('direction') direction: string;
  @Input('text') text: string;

  constructor() { }

  ngOnInit() {
  }

}
