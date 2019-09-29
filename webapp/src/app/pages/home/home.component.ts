import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('cardsAnime', [
      transition(':enter', [
        style({transform: 'translateY(100%)', opacity:0}),
        animate('0.8s ease-out')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor(
    private mScrollbarService: MalihuScrollbarService,
  ) { }

  ngOnInit() {
    this.mScrollbarService.initScrollbar(document.body, { axis: 'y', theme: 'minimal-dark' });
  }

}
