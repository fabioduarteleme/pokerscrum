import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger
} from '@angular/animations';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('cardsAnime', [

      transition('* => *', [
        query('.cards-home', style({ transform: 'translateY(100%)', opacity: 0})),
        query('.cards-home', stagger('150ms', [
          animate('0.3s ease-out', style({ transform: 'translateY(0%)', opacity: 1}))
        ]))
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
