import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  status: boolean = false;

  clickEvent(){
      this.status = !this.status;
  }

  numbers = [
    { number: 0},
    { number: 1},
    { number: 4},
    { number: 7},
    { number: 20},
    { number: 80},
    { number: 90},
    { number: 70}

  ];

}

