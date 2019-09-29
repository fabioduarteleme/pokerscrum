import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-search-room',
  templateUrl: './search-room.component.html',
  styleUrls: ['./search-room.component.scss'],
  animations:[
    trigger('searchAnime', [
      transition(':enter', [
        style({transform: 'translateY(30%)', opacity:0}),
        animate("0.3s ease-out")
      ])
    ])
  ]
})
export class SearchRoomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
