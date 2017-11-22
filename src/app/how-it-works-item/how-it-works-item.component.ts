import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-how-it-works-item',
  templateUrl: './how-it-works-item.component.html',
  styleUrls: ['./how-it-works-item.component.scss']
})
export class HowItWorksItemComponent implements OnInit {

  @Input('img') img: string;
  @Input('text') text: string;
  constructor() { }

  ngOnInit() {
  }

}
