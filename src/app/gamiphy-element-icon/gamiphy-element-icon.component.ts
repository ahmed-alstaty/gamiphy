import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gamiphy-element-icon',
  templateUrl: './gamiphy-element-icon.component.html',
  styleUrls: ['./gamiphy-element-icon.component.scss']
})
export class GamiphyElementIconComponent implements OnInit {
  @Input('icon') icon: string;
  // tslint:disable-next-line:no-input-rename
  @Input('background-image') iconBackgroundImage: string;
  constructor() { }

  ngOnInit() {
  }

}
