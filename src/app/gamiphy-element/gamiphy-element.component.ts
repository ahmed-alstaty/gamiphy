import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gamiphy-element',
  templateUrl: './gamiphy-element.component.html',
  styleUrls: ['./gamiphy-element.component.scss']
})
export class GamiphyElementComponent implements OnInit {
  @Input('icon') icon: string;
  // tslint:disable-next-line:no-input-rename
  @Input('background-image') iconBackgroundImage: string;
  // tslint:disable-next-line:no-input-rename
  @Input('font-color') fontColor: string;
  @Input('description') description: string;

  constructor() { }

  ngOnInit() {
  }

}
