import { Component, OnInit, Inject } from '@angular/core';
import * as animations from '@angular/animations';
import { DOCUMENT } from '@angular/common';

import { NgxSpinnerService } from 'ngx-spinner';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';


@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
  animations:[
    animations.trigger('cardsAnime', [
      animations.transition('* => *', [
        animations.query('.card-number', animations.style({ transform: 'translateY(60%) rotateY(90deg) scale(0)', opacity: 0})),
        animations.query('.card-number', animations.stagger('100ms', [
          animations.animate('0.5s ease-out', animations.style({ transform: 'translateY(0%) rotateY(360deg) scale(1)', opacity: 1}))
        ]))
      ])

    ])
  ]
})
export class PlayComponent implements OnInit {


  constructor(
    private spinner: NgxSpinnerService,
    private mScrollbarService: MalihuScrollbarService,
    @Inject(DOCUMENT) private document: any
  ) {
      this.document.body.classList.remove('hidden-bars');
  }


  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }

}
