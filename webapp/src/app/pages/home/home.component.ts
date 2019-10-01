import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('cardsAnime', [

      transition('* => *', [
        query('.cards-home', style({ transform: 'translateY(100%) rotateY(90deg)', opacity: 0})),
        query('.cards-home', stagger('150ms', [
          animate('0.5s ease-out', style({ transform: 'translateY(0%) rotateY(360deg)', opacity: 1}))
        ]))
      ])

    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: any
  ) {
      this.document.body.classList.add('hidden-bars');
  }

  ngOnInit() {

  }

}
